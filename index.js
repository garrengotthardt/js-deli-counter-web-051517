let katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    let sentence = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      sentence +=  `${i+1}. ${line[i]}, `
    }
    debugger
    sentence = sentence.slice(0,-2)
    return sentence
  }
}
