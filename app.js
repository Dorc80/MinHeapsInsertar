function MinHeap() {

    this.heap = [];
    this.insert = function (val) {

        if (this.heap.length == 0) {
            this.heap.push(undefined);
            this.heap.push(val);
            return;
        }

        this.heap.push(val);

        // Obtiene el indice del hijo que corresponde a la ultima posicion de array
        let childIdx = this.heap.length - 1;
        // Obtiene el indice del padre
        let parentInd = Math.trunc(childIdx / 2);

        // Intercambia posiciones hasta que el nuevo valor insertado sea menor al padre
        while (this.heap[parentInd] > this.heap[childIdx]) {
            this.heap[childIdx] = this.heap[parentInd];
            this.heap[parentInd] = val;
            childIdx = parentInd;
            parentInd = Math.trunc(childIdx / 2);
        }

    }

}

let minHeap = new MinHeap();
minHeap.heap = [];
minHeap.insert(13);
console.log(minHeap.heap);

minHeap.heap = [undefined, 3, 8, 10, 11, 9, 20, 14];
minHeap.insert(7);
console.log(minHeap.heap);