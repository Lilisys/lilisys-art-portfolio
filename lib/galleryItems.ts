import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const galleryItemsDirectory = path.join(process.cwd(), 'galleryItems')
const galleryImagesDirectory = `${process.env.S3_PATH}/gallery-images`

// gallery items are md files with img filename, title, desc, date
// TODO: can be fetched from aws or something in the future
export function getSortedGalleryItemsData() {
  // Get file names under /galleryImages
  const fileNames = fs.readdirSync(galleryItemsDirectory)
  const allGalleryItemsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(galleryItemsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Put together img src
    const imgFilename = matterResult.data.imgFilename
    const imgSrc = `${galleryImagesDirectory}/${imgFilename}`

    // Combine the data with the id
    return {
      id,
      imgSrc,
      ...(matterResult.data as { date: string; title: string; imgFilename: string })
    }
  })
  // Sort posts by date
  return allGalleryItemsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllGalleryImageIds() {
  const fileNames = fs.readdirSync(galleryItemsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getGalleryItemData(id: string) {
  const fullPath = path.join(galleryItemsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    description: contentHtml,
    ...(matterResult.data as { date: string; title: string; imgFilename: string })
  }
}