class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)

        console.log('sdfdsf')
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }

    dfdsf() {
        return 0
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size())
stack.print()
console.log(stack.pop())
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
console.log(stack.isEmpty())
stack.print()
