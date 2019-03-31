
const {createQueue} = require('./queue');

function createPriorityQueue(){
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();
    return {
        //enqueue
        enqueue(item, isHighPriority = false){
            isHighPriority? highPriorityQueue.enqueue(item)
            : lowPriorityQueue.enqueue(item);
        },
        // dequeue
        dequeue(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.dequeue();
            }
            return lowPriorityQueue.dequeue();
        },
        // peek
        peek(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.peek();
            }
            return lowPriorityQueue.peek();
        },
        // length
        length(){
            return highPriorityQueue.length+
            lowPriorityQueue.length;
        },

        // isEmpty
        isEmpty(){
            return (highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty());
        }
    }
}

const q = createPriorityQueue();
q.enqueue('A fix here');
q.enqueue('A bug there');
q.enqueue('A new feature');

q.dequeue();
q.enqueue('Emergency task!',true);
console.log(q.dequeue());
console.log(q.peek());