// Your code here
function mapToNegativize(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(arr[i] * -1)
    }
    return n
}

function mapToNoChange(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(arr[i])
    }

    return n
}

function mapToDouble(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(arr[i] * 2)
    }
    return n
}

function mapToSquare(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(arr[i] * arr[i])
    }
    return n
}

function reduceToTotal(sourceA, starting=0) {
    let total = starting
    for (let i = 0; i < sourceA.length; i++) {
        total += sourceA[i]
    }

    return total
}

function reduceToTotal(src, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++) {
        total = total + src[i]
    }
    return total
}

function reduceToAllTrue(sourceA) {
    let truth = true
    for (let i = 0; i < sourceA.length; i++) {
        truth = !!sourceA[i]
    }
    return truth
}

function reduceToAnyTrue(sourceA) {
    for (let i = 0; i < sourceA.length; i++) {
        if (sourceA[i]) return true
    }
    return false
}