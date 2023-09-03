#!/usr/bin/env node

import { Command } from "commander"
const program = new Command()

program
  .argument("<string>", "String to log")
  .option("-c, --capitalize", "Capitalize the message")
  .action(
    (
      message,
      opts: {
        capitalize?: boolean
      }
    ) => {
      if (opts.capitalize) {
        console.log(message.toUpperCase())
      } else {
        console.log(`Hello ${message}!!`)
      }
    }
  )
  .description("Say Hello")

program
  .command("add <numbers...>")
  .action((numbers: number[]) => {
    const total = numbers.reduce((a, b) => a + b, 0)
    console.log(`Total: ${total}`)
  })
  .description("Add numbers and log the total")

program
  .command("get-max-numbers <numbers...>")
  .action((numbers: number[]) => {
    const max = Math.max(...numbers)
    console.log(`Max: ${max}`)
  })
  .description("Add numbers and log the total")

program.parse(process.argv)
