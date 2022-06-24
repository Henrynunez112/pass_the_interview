import LinkedList from "./LinkedList";
import Node from "./Node.js";

/**
 * Hash map: A key-value store that uses an array and a hashing function to save and retrieve values.
Key: The identifier given to a value for later retrieval.
Hash function: A function that takes some input and returns a number.
Compression function: A function that transforms its inputs into some smaller range of possible outputs.

Recipe for saving to a hash table:
- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index is empty, if so, save the value (and the key) there.
- If the array is full at that index continue to the next possible position depending on your collision strategy.

Recipe for retrieving from a hash table:
- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index has contents, if so, check the key saved there.
- If the key matches the one you're looking for, return the value.
- If the keys don't match, continue to the next position depending on your collision strategy.

 */

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }
  /**
   * The hashing function is the secret to efficiently storing and
   * retrieving values in a hash map. A hashing function takes a key
   * as input and returns an index within the hash map’s underlying array.
   */
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  /**
   * .assign() will handle the logic needed to take in a key-value
   * pair and store the value at a particular index.
   */
  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex]
    if(linkedList === null){
        linkedList.addToHead({key, value});
        return
    }
    let current = linkedList.head
    while(current){
      if(current.data.key === key){
        current.data = {key, value}
      }
      if(!current.getNextNode()){
        const newNode = new Node({key, value})
        current.setNextNode(newNode)
        break
      }
      current = current.getNextNode()
    }
  }

  /**
   * To be a fully functional hash map, we have to be able to
   * retrieve the values we are storing. To implement retrieval
   * for our hash map we’ll create a new HashMap method, .retrieve().
   * This method will make use of .hash()‘s deterministic nature to
   * find the value we’re looking for in the hash map.
   */
  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head
    while(current){
      if(current.data.key === key){
        return current.data.value
      }
      current = current.getNextNode()
    }
    return null
  }
}
