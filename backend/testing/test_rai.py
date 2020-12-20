
from rai.btree import *

def test_create():
    n = Node(1)
    assert(n != None)
    assert(n.left == None)
    assert(n.right == None)

def test_insert():
    n = Node(1,None, None)
    n.insert(Node(2,None,None))

    assert (n.node == 1)
    assert (n.right.node == 2)

def setup():
    n = Node(6,None, None)
    n.insert(Node(1,None,None))
    n.insert(Node(5,None,None))
    n.insert(Node(7,None,None))
    n.insert(Node(2,None,None))
    n.insert(Node(4,None,None))
    n.insert(Node(3,None,None))
    return n
# 6,1,5,7,2,4,3 ->
#      6
#   1    7
#     5
#   2    
#     4
#   3

def setup2():
    n = Node(4,None, None)
    n.insert(Node(2,None,None))
    n.insert(Node(1,None,None))
    n.insert(Node(3,None,None))
    n.insert(Node(5,None,None))
    n.insert(Node(6,None,None))
    return n
#     4
#  2     5
# 1 3     6


def test_find():
    n = setup()
    pos = n.find(4)
    assert (pos != -1)
    pos = n.find(8)
    assert (pos == -1)

def test_delete():
    n = setup2()
    n.delete(2)
    assert(n.find(2) == -1)

def test_depth():
    n = setup()
    assert(depth(n) == 6)
    assert(depth(setup2()) == 3)

def test_rotate():
    n = setup2()
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
