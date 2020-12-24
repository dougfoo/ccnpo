from rai.btree import *

def test_create():
    n = Node(1)
    assert(n != None)
    assert(n.left == None)
    assert(n.right == None)

def test_insert():
    n = Node(1,None, None)
    insert(n, Node(2,None,None))

    assert (n.node == 1)
    assert (n.right.node == 2)

def setup6157243():
    n = Node(6,None, None)
    insert(n,Node(1,None,None))
    insert(n,Node(5,None,None))
    insert(n,Node(7,None,None))
    insert(n,Node(2,None,None))
    insert(n,Node(4,None,None))
    insert(n,Node(3,None,None))
    return Node.balance(n)
# 6,1,5,7,2,4,3 ->
#      6
#   1    7
#     5
#   2    
#     4
#   3

def setup421356():
    n = Node(4,None, None)
    insert(n,Node(2,None,None))
    insert(n,Node(1,None,None))
    insert(n,Node(3,None,None))
    insert(n,Node(5,None,None))
    insert(n,Node(6,None,None))
    return n
#     4
#  2     5
# 1 3     6

def setup312():
    n = Node(3,None, None)
    insert(n,Node(1,None,None))
    insert(n,Node(2,None,None))
    return n

def setup354():
    n = Node(3,None, None)
    insert(n,Node(5,None,None))
    insert(n,Node(4,None,None))
    return n

def test_find():
    n = setup6157243()
    pos = n.find(4)
    assert (pos != -1)
    pos = n.find(8)
    assert (pos == -1)

def test_delete():
    n = setup421356()
    n.delete(2)
    assert(n.find(2) == -1)

def test_depth():
    n = setup6157243()
    assert(depth(n) == 3)
    assert(setup421356().depth() == 3)

def test_depth_method():
    n = setup6157243()
    assert(depth(n) == 3)
    assert(depth(setup421356()) == 3)

def test_rotate():
    n = setup421356()
    assert(depth(n.left) == 2)
    assert(depth(n.right) == 2)
    n = rotateLeft(n)
    assert(depth(n.left) == 3)
    assert(depth(n.right) == 1)
    n = rotateRight(n)
    assert(depth(n.left) == 2)
    assert(depth(n.right) == 2)
    n = rotateRight(n)
    assert(depth(n.left) == 1)
    assert(depth(n.right) == 3)

def test_rotatedouble():
    n = setup312()
    assert(depth(n.left) == 2)
    assert(depth(n.right) == 0)
    n = rotateRight2(n)
    assert(depth(n.left) == 1)
    assert(depth(n.right) == 1)
    n = setup354()
    assert(depth(n.left) == 0)
    assert(depth(n.right) == 2)
    n = rotateLeft2(n)
    assert(depth(n.left) == 1)
    assert(depth(n.right) == 1)

def test_balance():
    n = setup312()
    b = Node.balance(n)
    assert(depth(b.left) == 1)
    assert(depth(b.right) == 1)

    n = setup354()
    b = Node.balance(n)
    assert(depth(b.left) == 1)
    assert(depth(b.right) == 1)

    n = setup421356()
    b = Node.balance(n)
    assert(depth(b.left) == 2)
    assert(depth(b.right) == 2)

    n = setup6157243()
    b = Node.balance(n)
    assert(depth(b.left) == 2)
    assert(depth(b.right) == 2)

