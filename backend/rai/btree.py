# balancing binary tree

# bfs
import collections

def printPretty(r):
    def _printPretty(root):
        if (root == None):
            return
        # print(root.node, end='')
        if (root.left):
            print(root.left.node, end='')
        if (root.right):
            print(f' {root.right.node}', end='')
        print('\n', end='')
        _printPretty(root.left)
        _printPretty(root.right)
    print(r.node)
    _printPretty(r)

def printInOrder(root):
    if (root.left):
        printInOrder(root.left)
    print(root.node)
    if (root.right):
        printInOrder(root.right)

def printPreOrder(root):
    print(root.node)
    if (root.left):
        printPreOrder(root.left)
    if (root.right):
        printPreOrder(root.right)

def depth(root):
    if (root is None):
        return 0
    else:
        return max(depth(root.left), depth(root.right)) +1

def rotateLeft(root):
    if (root.right is None):
        return root
    tmp_root = root.right
    tmp_left = tmp_root.left
    root.right = None
    tmp_root.left = root
    if (tmp_left != None):
        tmp_root.insert(tmp_left)
    return tmp_root

def rotateRight(root):
    if (root.left is None):
        return root
    tmp_root = root.left
    tmp_right = tmp_root.right
    root.left = None
    tmp_root.right = root
    if (tmp_right != None):
        tmp_root.insert(tmp_right)
    return tmp_root
#      3          2      
#    2      ->   1  3
#   1

def rotateLeft2(root): # double right, ie, left-right    
    r = rotateRight(root.right)
    root.right = r
    return rotateLeft(root)

def rotateRight2(root): # double right, ie, left-right    
    r = rotateLeft(root.left)
    root.left = r
    return rotateRight(root)

def printPostOrder(root):
    if (root.left):
        printPostOrder(root.left)
    if (root.right):
        printPostOrder(root.right)
    print(root.node)

class Node(object):
    def __init__(self, node, left=None, right=None):
        self.node=node
        self.left=left
        self.right=right

    def __repr__(self):
        return 'Node: '+str(self.node)

    def insert(self, node):
        if (node.node <= self.node):
            if (self.left is None):
                self.left = node
            else:
                self.left.insert(node)
        else:
            if (self.right is None):
                self.right = node
            else:
                self.right.insert(node)

    def find(self, key):
        n = self.findNode(key)
        if (n == None):
            return -1
        else:
            return n.node # the value

    def findNode(self, key):
        if (key == self.node):
            return self
        elif (key < self.node):
            if (self.left is None):
                return None
            else:
                return self.left.findNode(key)
        else:
            if (self.right is None):
                return None
            else:
                return self.right.findNode(key)

    def findParentNode(self, key):
        if ((self.left != None and self.left.node == key) or (self.right != None and self.right.node == key)):
            return self
        elif (self.left == None and self.right == None):
            return None
        elif (key < self.node):
            return self.left.findParentNode(key)
        else:
            return self.right.findParentNode(key)

    def delete(self, key):
        n = self.findParentNode(key)
        print('found parent:' + str(n))
        if (n == None):
            return -1
        else:
            if (n.left != None and key == n.left.node):
                if (n.left.left != None):
                    tmp_right = n.left.right
                    n.left = n.left.left
                    n.left.right = tmp_right
                else:
                    n.left = n.left.right
            else:
                if (n.right.left != None):
                    tmp_right = n.right.right
                    n.right = n.right.left
                    n.right.right = tmp_right
                else:
                    n.right = n.right.right
    #     4
    #  2   5
    # 1 3   6 
    # delete (2) - if 2 child u can do either left or right up
    #     4              4
    #  1   5     or    3   5
    #   3   6         1     6
    # delete (5) - if one child, then replace / move up
    #     4
    #  2   6
    # 1 3    
    # rebuild entire subtree?  or in general you replace
    # the deleted w/ one subchild if exists is all we need to do
    # as subchildren still honor tree rule

    def balance(self):
        pass
    # rebalance tree from :
    #   1              2
    #     2               3
    #       3           1
    #  to             to 
    #   2              2 
    #  1  3          1   3
    # rule for rotation:
    #   if left heavy:
    #      if left.left heavy:
    #          rotate right
    #      else: rotate left-right
    #   else:
    #      if right.right heavy:
    #          rotate left
    #      else: rotate right-left


n = Node(6,None, None)
n.insert(Node(1,None,None))
n.insert(Node(5,None,None))
n.insert(Node(7,None,None))
n.insert(Node(2,None,None))
n.insert(Node(4,None,None))
n.insert(Node(3,None,None))

# 6,1,5,7,2,4,3 ->
#      6
#   1    7
#     5
#   2    
#     4
#   3

print('inorder')
printInOrder(n)
print('preorder')
printPreOrder(n)
print('postorder')
printPostOrder(n)
print('pretty')
printPretty(n)

print('delete 4')
n.delete(4)
printPretty(n)


n = Node(3,None, None)
n.insert(Node(2,None,None))
n.insert(Node(1,None,None))

print('original')
printPretty(n)
n2 = rotateRight(n)
print('rotateRight')
printPretty(n2)

n = Node(6,None, None)
n.insert(Node(1,None,None))
n.insert(Node(5,None,None))
n.insert(Node(7,None,None))
n.insert(Node(2,None,None))
n.insert(Node(4,None,None))
n.insert(Node(3,None,None))
print('original2')
printPretty(n)
n = rotateRight(n)
print('rotateRight')
printPretty(n)
n = rotateLeft(n)
print('rotateLeft')
printPretty(n)

n = Node(3,None, None)
n.insert(Node(1,None,None))
n.insert(Node(2,None,None))

print('original')
printPretty(n)
print('double-right')
printPretty(rotateRight2(n))