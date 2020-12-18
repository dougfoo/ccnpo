
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
