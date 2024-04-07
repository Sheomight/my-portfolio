import GetGoogleFonts from 'get-google-fonts'

export default async function fonts() {
  const instance = new GetGoogleFonts({
    outputDir: './dist/assets/fonts',
    cssFile: './fonts.css',
  })

  const result = await instance.download(
    GetGoogleFonts.constructUrl(
      {
        "JetBrains Mono": [300, 400, 500, 600],
      },
      'cyrillic'
    )
  )

  return result
}