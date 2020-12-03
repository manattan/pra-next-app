import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(),'posts')

export const getSortedPostsData = ():any => {
    const fileNames = fs.readdirSync(postsDir)
    const allData = fileNames.map(tmp => {
        const id = tmp.replace(/\.md$/, '')
        const filePath = path.join(postsDir, tmp)
        const tmpContent = fs.readFileSync(filePath, 'utf8')

        const matterResult = matter(tmpContent)

        return {
            id,
            ...matterResult.data
        }
    })

    return allData.sort((a:any,b:any) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export const getAllId = () => {
    const fileNames = fs.readdirSync(postsDir)
    return fileNames.map(tmp => {
        return {
            params: {
                id: tmp.replace(/\.md/, '')
            }
        }
    })
}

export const getPostData = (id: String) => {
    const filePath = path.join(postsDir, `${id}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContent)
    return {
        id,
        ...matterResult.data
    }
}