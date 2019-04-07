
module.exports.createQueue = function(){
    const queue = [];
    const size = 0;
    return {
        //add or enqueue
        enqueue(item){
            queue.unshift(item);
        },
        //remove or dequeue
        dequeue(){
            return queue.pop();
        },
        // peek
        peek(){
            return queue[queue.length-1];
        },
        // length
        get length(){
            return queue.length;
        },
        isEmpty(){
            return queue.length === 0;
        }
        //is empty
    }
};
