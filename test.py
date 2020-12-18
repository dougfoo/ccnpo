import time

def flatten(lst):
    flst = []
    for l in lst:
        if isinstance(l,list):
            flst += flatten(l)
        else:
            flst += [l]
    return flst

print(flatten([1,2,3,4]))
print(flatten([1,[2,3],4]))
print(flatten([1,[2,[3],4]]))

import collections
import statistics



# binary search thru list to find slot to insert into
def findSlot(list, e):
    n = 0
    for l in list:
        if (e >= l):
            return n+1
        n+=1
    return n+1

def get_lim(sorted_list, mid, odd):
    if (odd):
        lim = sorted_list[mid] * 2
    else:
        lim = sorted_list[mid] + sorted_list[(mid) + 1]
    return lim
            
def findSlot2(list, e):
#    print(f'ffindslot {list} vs {e}')
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
    
def activityNotifications(expenditure, d):
    odd = True if d%2==1 else False
    mid = d // 2
    tic = time.perf_counter()
    buf = collections.deque()
    for e in expenditure[:d]:
        buf.appendleft(e)
    sorted_list = sorted(buf)   # maintain sorted list 
    lim = get_lim(sorted_list, mid, odd)
    count = 0
    toc = time.perf_counter()
    print(f'prep time {toc - tic:0.4f} seconds')

    tic = time.perf_counter()
    for e in expenditure[d:]:
 #       print(f'e: {e} vs {lim}')
        if (e >= lim):
            count+=1
        old = buf.pop()  # oops this does'nt work on a fixed size buf
        # itic = time.perf_counter()
        ind = findSlot2(sorted_list, old)
 #       print(f'pop remove {old} slot {ind}')
        # itoc = time.perf_counter()
        # print(f'findslot time {itoc - itic:0.4f} seconds')
        del sorted_list[ind]
        # itoc = time.perf_counter()
        # print(f'del time {itoc - itic:0.4f} seconds')
        # itic = time.perf_counter()
        ind = findSlot2(sorted_list, e)
        # itoc = time.perf_counter()
        # print(f'find again time {itoc - itic:0.4f} seconds')
        # itic = time.perf_counter()
        sorted_list.insert(ind, e)
        # itoc = time.perf_counter()
        # print(f'sorted insert time {itoc - itic:0.4f} seconds')
        # itic = time.perf_counter()
        buf.appendleft(e)
        # itoc = time.perf_counter()
        # print(f'appendleft time {itoc - itic:0.4f} seconds')
        # itic = time.perf_counter()
        lim = get_lim(sorted_list, mid, odd)
        # itoc = time.perf_counter()
        # print(f'get_lim time {itoc - itic:0.4f} seconds')
    toc = time.perf_counter()
    print(f'loop time {toc - tic:0.4f} seconds')
    return count

if __name__ == '__main__':
    d = 5
    expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]
    print(activityNotifications(expenditure, d),'vs',2)

    d = 4
    expenditure = [1,2,3,4,4]
    print(activityNotifications(expenditure, d),'vs',0)

    d = 3
    expenditure = [10,20,30,40,50]
    print(activityNotifications(expenditure, d),'vs',1)

    print(0,findSlot2([1,2,3,4,5], 0))
    print(1,findSlot2([1,2,3,4,5], 1))
    print(6,findSlot2([1,2,3,4,5], 4))
    print(7,findSlot2([1,2,3,4,5], 6))

    f = open('testfile.txt','r')

    nd = f.readline().split()
    n = int(nd[0])
    d = int(nd[1])
    expenditure = list(map(int, f.readline().rstrip().split()))

    print(f'n: {n} d: {d} expenditure: {expenditure[0:3]}')

    tic = time.perf_counter()
    result = activityNotifications(expenditure, d)
    toc = time.perf_counter()
    print(f'func time {toc - tic:0.4f} seconds')

