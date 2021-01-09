import * as fastq from '../'

// Basic example

const queue = fastq(worker, 1)

queue.push('world', (err, result) => {
  if (err) throw err
  console.log('the result is', result)
})

queue.concurrency

queue.drain()

queue.empty = () => undefined

console.log('the queue tasks are', queue.getQueue())

queue.idle()

queue.kill()

queue.killAndDrain()

queue.length

queue.pause()

queue.resume()

queue.saturated = () => undefined

queue.unshift('world', (err, result) => {
  if (err) throw err
  console.log('the result is', result)
})

function worker(task: any, cb: fastq.done) {
  cb(null, 'hello ' + task)
}

// Generics example

interface GenericsContext {
  base: number;
}

const genericsQueue = fastq<GenericsContext, number, string>({ base: 6 }, genericsWorker, 1)

genericsQueue.push(7, (err, done) => {
  if (err) throw err
  console.log('the result is', done)
})

genericsQueue.unshift(7, (err, done) => {
  if (err) throw err
  console.log('the result is', done)
})

function genericsWorker(this: GenericsContext, task: number, cb: fastq.done<string>) {
  cb(null, 'the meaning of life is ' + (this.base * task))
}
