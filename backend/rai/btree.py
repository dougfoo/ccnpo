# balancing binary tree

def printInorder(root):
    if (root.left):
        printInorder(root.left)
    if (root.right):
        printInorder(root.right)
    print(root.node)

class Node(object):
    def __init__(self, node, left=None, right=None):
        self.node=node
        self.left=left
        self.right=right

    def insert(self, node):
        if (node <= self.node):
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
        if (key == self.node):
            return self.node
        elif (key < self.node):
            if (self.left is None):
                return -1
            else:
                return self.left.find(key)
        else:
            if (self.right is None):
                return -1
            else:
                return self.right.find(key)

