const express = require("express")
const app = express()

app.use(express.json())

app.post('/second-largest', (req, res) => {
  const { arr } = req.body;
  console.log("/second-largest route hit", arr);

  let maxNumber = arr[0]
  let secondMaxNumber = arr[1]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      secondMaxNumber = maxNumber
      maxNumber = arr[i]
    }
  }

  res.status(200).json({
    message: `Second largest number is ${secondMaxNumber}` 
  })
})


const startApp = async () => {
  try {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, console.log(`Server started at port ${PORT}`))
  } catch (error) {
    console.error(error);
  }
}

startApp()
