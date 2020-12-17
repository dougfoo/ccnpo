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

# Complete the activityNotifications function below.
def activityNotifications(expenditure, d):
    buf = collections.deque(expenditure[:d], maxlen=d)  # of len d
    count = 0
    lim = statistics.median(buf) * 2

    for e in expenditure[d:]:
        print(f'e: {e} >= {lim}')
        if (e >= lim):
            count+=1
        buf.append(e)

        lim = statistics.median(buf) * 2

    return count


if __name__ == '__main__':
    n = 9
    d = 5
    expenditure = [2,3,4,2,3,6,8,4,5]
    result = activityNotifications(expenditure, d)
    print(str(result) + '\n')

    n = 5
    d = 4
    expenditure = [1,2,3,4,4]
    result = activityNotifications(expenditure, d)
    print(str(result) + '\n')

    n = 5
    d = 3
    expenditure = [10,20,30,40,50]
    result = activityNotifications(expenditure, d)
    print(str(result) + '\n')
