# EasyTree

Easy tree data processing.

## Install

``` node
  npm i easydata-tree //or yarn add easydata-tree
```

## CDN

``` js
  <script src="https://unpkg.com/easydata-tree/dist/index.min.js"></script>
  <script>
    new EasyTree({
      parentId: 'pid',
      label: 'name',
      children: 'child'
    })
  </script>
```

### Usage

``` js
const EasyTree = require("easydata-tree")
new EasyTree({
  parentId: 'pid',
  label: 'name',
  children: 'child'
})
let tree = [{
  name: '-一级 1',
  id: '一级 1',
  z: 1,
  child: [{
    name: '-二级 1-1',
    id: '二级 1-1',
    z: 3,
    child: [{
      name: '-三级 1-1-1',
      id: '三级 1-1-1',
      z: 2
    }]
  }]
}, {
  name: '-一级 2',
  id: '一级 2',
  child: [{
    name: '-二级 2-1',
    id: '二级 2-1',
    child: [{
      name: '-三级 2-1-1',
      id: '三级 2-1-1'
    }]
  }, {
    name: '-二级 2-2',
    id: '二级 2-2',
    child: [{
      name: '-三级 2-2-1',
      id: '三级 2-2-1'
    }]
  }]
}, {
  name: '-一级 3',
  id: '一级 3',
  child: [{
    name: '-二级 3-1',
    id: '二级 3-1',
    child: [{
      name: '-三级 3-1-1',
      id: '三级 3-1-1'
    }]
  }, {
    name: '-二级 3-2',
    id: '二级 3-2',
    child: [{
      name: '-三级 3-2-1',
      id: '三级 3-2-1'
    }]
  }]
}]
```

* toArray(parentId)
  * {String|Number} parentId

  ``` js
    tree.toArray()
  ```

* toTree(parentId)
  * {String|Number} parentId

  ``` js
    tree.toArray().toTree()
  ```

* findPath(id)
  * {String|Number} id `required`

  ``` js
    tree.findPath('三级 3-1-1')
  ```

* findChildren(id)
  * {String|Number} id `required`

  ``` js
    tree.findPath('一级 3')
  ```