class DoublyLinkedList {
  constructor(items) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(items)) {
      items.forEach((item) => {
        this.push(item);
      });
    } else if (items) {
      this.push(item);
    }
  }

  push(value) {
    const item = {
      prev: null,
      value,
      next: null,
    };

    if (!this.length) {
      this.head = item;
      this.tail = item;
      this.length++;
      return;
    }

    item.prev = this.tail;
    this.tail.next = item;
    this.tail = item;
    this.length++;
  }

  getAt(index) {
    if (index >= this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }

    return current.value;
  }

  removeAt(index) {
    if (index >= this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }

    let { prev } = current;
    if (prev) {
      prev.next = current.next;
    }

    let { next } = current;
    if (next) {
      next.prev = current.prev;
    }

    if (index === 0) {
      this.head = next;
    }

    if (index === this.length - 1) {
      this.tail = prev;
    }

    this.length--;
  }
}



const list = new DoublyLinkedList([
  'a',
  'b',
  'c',
  'd',
]);