
from rai.btree import Node

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

def setup2():
    n = Node(4,None, None)
    n.insert(Node(2,None,None))
    n.insert(Node(1,None,None))
    n.insert(Node(3,None,None))
    n.insert(Node(5,None,None))
    n.insert(Node(6,None,None))
    return n

def test_find():
    n = setup()
    pos = n.find(4)
    assert (pos != -1)
    pos = n.find(8)
    assert (pos == -1)

# def test_delete():
#     n = setup2()
#     n.delete(2)
#     assert(n.find(2) == -1)

# 6,1,5,7,2,4,3 ->
#      6
#   1    7
#     5
#   2    
#     4
#   3
