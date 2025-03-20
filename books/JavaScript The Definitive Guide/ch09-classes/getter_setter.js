// Date: 2025/02/10
// Creator: ysoma
// Ref: JavaScript: The Definitive Guide, 7th Edition
// Chapter 9. Class
// ------------------------------------------------

// 9.3.3

class Buffer {
    #size = 0;
    capacity = 4096;
    buffer = new Uint8Array(this.capacity);

    get size() { return this.#size; };
}