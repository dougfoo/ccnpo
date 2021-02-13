from functools import cmp_to_key
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __repr__(self):
        return f'Player name: {name}, score: {score}'

    def comparator(a, b):
        if (a.score > b.score):
            return -1
        elif (a.score < b.score):
            return 1
        else:
            if (a.name < b.name):
                return -1
            elif (a.name > b.name):
                return 1
            else:
                return 0

    def test():
        n = int(input())
        data = []

        for i in range(n):
            name, score = input().split()
            score = int(score)
            player = Player(name, score)
            data.append(player)
            
        data = sorted(data, key=cmp_to_key(Player.comparator))
        for i in data:
            print(i.name, i.score)


import math
import os
import random
import re
import sys
import collections
import statistics

def findSlot2(list, e):
    if (len(list) == 0):
        return 0
    elif (len(list) == 1):
        return 0 if (e <= list[0]) else 1
    else:
        mid = len(list) // 2
        if e < list[mid]:
            return 0 + findSlot2(list[:mid], e) 
        else:
            return mid + findSlot2(list[mid:], e)
    
def get_lim(sorted_list):
    d = len(sorted_list)
    if (d %2 == 1):
        lim = sorted_list[d//2] * 2
    else:
        lim = sorted_list[d//2] + sorted_list[(d//2) + 1]
    return lim            

def get_lim2(sorted_list, d):
    sorted_list2 = [0]*len(sorted_list)
    for i,e in enumerate(sorted_list):
        if (i == 0):
            sorted_list2[0] = e
        else:
            sorted_list2[i] = sorted_list2[i-1] + e

    # print(f'sorted list2: {sorted_list2}')
    mid = (d//2) 
    if (d %2 == 1):
        # skip until non 0
        for i,e in enumerate(sorted_list2):
            if (e == 0):
                continue
            elif (e > mid):
                return i*2

    else:        
        for i,e in enumerate(sorted_list2):
            # print(i,e)
            if (e == 0):
                continue
            elif (e >= mid):
                if (e >= mid+1):
                    return i*2
                else:
                    j = i
                    while (True):
                        j += 1
                        if (sorted_list2[j] > e):
                            return i+j        


# Complete the activityNotifications function below.
def activityNotifications(expenditure, d):
    buf = collections.deque()
    sorted_list2 = [0]*201  # 201
    for e in expenditure[:d]:
        sorted_list2[e] += 1
        buf.appendleft(e)

    lim = get_lim2(sorted_list2, d)
    count = 0

    for e in expenditure[d:]:
#        print(f'e: {e} >= lim {lim}')
        if (e >= lim):
            count+=1
        old = buf.pop()
        sorted_list2[old] -= 1
        buf.appendleft(e)
        sorted_list2[e] += 1
        lim = get_lim2(sorted_list2, d)
    return count

if __name__ == '__main__':
    n = 9
    d = 5
    expenditure = [2,3,4,2,3,6,8,4,5]
    result = activityNotifications(expenditure, d)
    print(f'{result} expect 2')
    assert(result == 2)

    n = 5
    d = 4
    expenditure = [1,2,3,4,4]
    result = activityNotifications(expenditure, d)
    print(f'even {result} expect 0')
    assert(result == 0)

    n = 5
    d = 3
    expenditure = [10,20,30,40,50]
    result = activityNotifications(expenditure, d)
    print(f'odd {result} expect 1')
    assert(result == 1)

    n = 5
    d = 3
    expenditure = [15,20,15,40,50]
    result = activityNotifications(expenditure, d)
    print(f'odd {result} expect 2')

    n = 5
    d = 3
    expenditure = [151, 39 ,37 ,83, 7 ,190, 64]
    result = activityNotifications(expenditure, d)
    print(f'odd {result} expect 2')
    assert(result == 2)

    n = 5
    d = 3
    expenditure = [0, 2, 4, 0, 0, 2, 3, 5]
    result = activityNotifications(expenditure, d)
    print(f'even 0s {result} expect 3')
    assert(result == 3)

    with open("./input01.txt") as file:  
        (n,d) = file.readline().split(" ")
        d = int(d.strip('\n'))
        expenditure = list(map(int, file.readline().split(" ")))
        result = activityNotifications(expenditure, d)
        print(f'even test1 {result} expect 633')
        assert(result == 633)

    # with open("./input03.txt") as file:  
    #     (n,d) = file.readline().split(" ")
    #     d = int(d.strip('\n'))
    #     expenditure = list(map(int, file.readline().split(" ")))
    #     result = activityNotifications(expenditure, d)
    #     print(f'even {result} expect 1026')
    #     assert(result == 1026)

