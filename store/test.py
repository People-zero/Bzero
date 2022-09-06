dic = {}

for i in range(1):
    q = int(input())
    if (dic[q] >= 0 ):
        dic[q] += 1
    else:
        dic[q] = q
        
print(dic)
