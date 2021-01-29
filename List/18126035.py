import math
from collections import Counter
# bai 1


def inputList(list, n):
    i = 0
    while i < n:
        element = int(input('Insert: '))
        list.append(element)
        i += 1
    print(list)

# question 2a: Xóa một phần tử bất kỳ trên mảng.


def deleteElement(list, element):
    if element not in list:
        print(element, 'is not in list')
        return False
    list.remove(element)
    print(list)

# question 2b: Xóa k phần tử liên tục trên mảng bắt đầu từ một vị trí i cho trước.


def deleteConsecutive(list, start, k):
    if start not in list:
        print(start, 'is not in list')
        return False
    posStart = list.index(start)
    posEnd = posStart + k
    list[posStart:posEnd] = []
    print(list)

# question 2c Đếm số lượng các phần tử khác nhau xuất hiện trong mảng.


def countDifference(list):
    countDif = 0
    print('Different Element: ')
    for i in list:
        if list.count(i) == 1:
            print(i)
            countDif += 1
    if countDif == 0:
        countDif = "No Elements are the same"
    print('Number of different elements:', countDif)

# question 2d Cũng với yêu cầu cho biết số lượng phần tử khác nhau, nhưng biết rằng,
# các giá trị xuất hiện nằm trong trong đoạn [1, k].


def countDifference_To_K(list, k):
    countDif = 0
    if k > len(list):
        print('k is greater than lenghth of list')
        return False

    listTemp = list[1:k+1]
    countDif = 0
    print('Different Element: ')
    for i in listTemp:
        if listTemp.count(i) == 1:
            print(i)
            countDif += 1
    print('List[1:k] (k =', k, '): ', listTemp)
    if countDif == 0:
        countDif = "No Elements are the same"
    print('Number of different elements: ', countDif)


# question 2d Tìm số lớn thứ 2 xuất hiện trong mảng.
def secondLargeNumber(list):
    listTemp = list
    listTemp.remove(max(listTemp))
    return max(listTemp)

# 2f: Cho biết phần tử nào xuất hiện nhiều lần nhất trên mảng.


def mostVisibleElement(list):
    # listCount = {}
    # for i in list:
    #     listCount.update({i : list.count(i)}) #element is key, count is value
    # maxCount = max(listCount.values())
    # print('Most Visible Element:', listCount[maxCount], '- with', maxCount, 'appearances')

    print('Most Visible Element:', max(set(list), key=list.count),
          '- with', max([list.count(i) for i in list]), 'appearances')
# 2.g Tìm số nhỏ nhất trong mảng nhưng thuộc về đoạn [x, y] (x < y).


def minInSubList(list, start, end):  # start: x, end: y
    listTemp = list[start:end+1]
    return min(listTemp)

# 2.h In ra tổng lớn nhất của k phần tử liên tiếp xuất hiện trên mảng.


def sumMax(list, start, end):  # start - end: k
    return sum(list[start:end+1])


# 2.i In các phần tử trên mảng sao cho các số chẵn tăng dần rồi đến các số lẻ giảm dần.
def specialSort(list):
    evenList = [i for i in list if i % 2 == 0]
    oddList = [i for i in list if i % 2 != 0]
    evenList.sort()
    oddList.sort(reverse=True)
    list = []
    list = evenList
    list += oddList
    print('List has Ascending Sort Even Numbers and Descending Sort Odd Numbers: ', list)

# 2.j  Đảo ngược mảng.


def reverseList(list):
    return list[::-1]

# 2k: Sắp xếp các phần tử trên mảng sao cho các số chẵn tăng dần và ở đầu
# mảng, các số lẻ giảm dần và ở cuối mảng.


# 2.l Sắp xếp các số chính phương tăng dần. Những số còn lại không thay đổi vị trí.
# check a number is interger or not
def is_integer(n):
    try:
        float(n)
    except ValueError:
        return False
    else:
        return float(n).is_integer()


def squareNumberSort(list):
    listSquare = sorted([i for i in list if is_integer(math.sqrt(i))])
    listIndex = [list.index(i) for i in list if is_integer(math.sqrt(i))]
    for i in range(len(listIndex)):
        list[listIndex[i]] = listSquare[i]

    print(listSquare)
    print(listIndex)
    print(list)


# Sắp xếp các số nguyên tố tăng dần. Những số còn lại không thay đổi vị trí.
# check prime number
def primeNumber(number):
    if number > 1:
        for i in range(2, number):
            if (number % i) == 0:
                return False
        else:
            return True
    return False


def primeNumberSort(list):
    listPrime = sorted([i for i in list if primeNumber(i)])
    listIndex = [list.index(i) for i in list if primeNumber(i)]
    for i in range(len(listIndex)):
        list[listIndex[i]] = listPrime[i]
    print(listPrime)
    print(listIndex)
    print(list)


# question 2.n
# Nhập m là số nguyên dương nhỏ hơn n. Chia mảng làm 2 đoạn a[0] → a[m – 1] và a[m] → a[n – 1].
#  Không dùng thêm mảng phụ. Chuyển chỗ các phần tử để thành a[m] → a[n – 1] → a[0] → a[m – 1].
# vd: Input: [3,2,6,8,1,0], m = 2
# Output: [6, 8, 1, 0, 3, 2]
def changeList(list, m):
    if m <= 0 or m > (len(list)-1):
        print('m can not <= 0 ou > length of list!')
        return False
    else:
        for i in range(m):
            list.append(list[i])
        for i in range(m):
            list.pop(0)

        print('new list: ', list)

# 2o: o. Kiểm tra xem mảng có tăng dần hay giảm dần không.
# kiểm tra mảng tăng dần hay ko


def checkSortAscending(List):
    flag = True
    for i in range(len(List)-1):
        if List[i] > List[i+1]:
            flag = False
    return flag

# kiểm tra mảng giảm dần hay ko


def checkSortDescending(List):
    flag = True
    for i in range(len(List)-1):
        if List[i] < List[i+1]:
            flag = False
    return flag


def checkSort(List):
    asCheck = checkSortAscending(List)
    desCheck = checkSortDescending(List)
    print("list de controle est un tri croissant ou un tri decroissant: ")
    if asCheck == True:
        print("list est ascendant")
    elif desCheck == True:
        print("list est descendant")
    else:
        print("Ce n'est pas une liste croissante ou décroissante")


# 2o: o. Kiểm tra xem mảng có tăng dần hay giảm dần không.(cách tệ)
def checkSort_Bad(list):
    listAscendant = sorted(list)
    listDescendant = listAscendant[::-1]
    print("list de controle est un tri croissant ou un tri decroissant: ")
    if list == listAscendant:
        print("list est ascendant")
    if list == listDescendant:
        print("list est descendant")
    else:
        print("Ce n'est pas une liste croissante ou décroissante")


#   p. In dãy con tăng dần (liên tiếp) dài nhất xuất hiện trong mảng. Nếu có nhiều dãy cùng dài nhất thì chỉ cần in ra một.
def longestSubArray(a, n):
    length = Max = 1
    s = e = 0
    for i in range(0, n-1):
        if a[i] < a[i+1]:
            length += 1
            if length > Max:
                Max = length
                e = i+2
                s = i+2-length
        else:
            length = 1
    print(a[s:s+e-1])


#   q. In ra tất cả các dãy con tăng (liên tiếp) của mảng.
def longestSubArrays(a, n):
    print("Các mảng con tăng dần dài nhất: ")
    for i in range(0, n-1):
        if a[i] < a[i+1]:
            print(a[i], end=" ")
        else:
            print(a[i], end=" ")
            print(" and ", end=" ")


#   r. Giả sử là mảng số nguyên. Tìm số dương nhỏ nhất và số âm lớn nhất.
def findMaxNegativeAndMinPositive(a, n):
    maxNegative = min(a)
    minPositive = max(a)
    for i in range(0, n):
        if a[i] < 0 and a[i] > maxNegative:
            maxNegative = a[i]
        elif a[i] > 0 and a[i] < minPositive:
            minPositive = a[i]
    if min(a) > 0:
        maxNegative = "(Không tồn tại số nguyên âm lớn nhất trong mảng)"
    elif max(a) < 0:
        minPositive = "(Không tồn tại số nguyên dương nhỏ nhất trong mảng)"
    print("Số nguyên dương nhỏ nhất và số nguyên âm lớn nhất lần lượt là ",
          maxNegative, "và", minPositive)


#   3. Mảng x và y chứa hoành độ và tung độ của các điểm trên mặt phẳng hai chiều. In ra khoảng cách xa nhất giữa 2 điểm.
def distance2DPoint(x, y, n):
    allDistance = []
    for i in range(0, n-2):
        for j in range(i+1, n-1):
            distance = math.sqrt((x[j] - x[i])**2 + (y[j] - y[i])**2)
            allDistance.append(distance)
    print(max(allDistance))


#   4. Trộn xen kẽ các phần tử của 2 mảng một chiều a và b để tạo thành mảng một chiều duy nhất (a, b có thể có số phần tử khác nhau).
def mixedArray(X, Y, n, m):
    c = []
    if n < m:
        for i in range(0, n):
            c.append(X[i])
            c.append(Y[i])
        for i in range(n, m):
            c.append(Y[i])
    else:
        for i in range(0, m):
            c.append(Y[i])
            c.append(X[i])
        for i in range(m, n):
            c.append(X[i])
    return c


#   5. Trộn 2 mảng một chiều a, b (đã xếp tăng) thành một mảng một chiều c cũng tăng (a, b có thể có số phần tử khác nhau).
def mixedAscendingArray(X, Y, n, m):
    X.sort()
    Y.sort()
    c = []
    i = 0
    j = 0
    while i < len(X) and j < len(Y):
        if(X[i] < Y[j]):
            c.append(X[i])
            i += 1
        else:
            c.append(Y[j])
            j += 1
    while(i < len(X)):
        c.append(X[i])
        i += 1
    while(j < len(Y)):
        c.append(X[i])
        j += 1
    return c


#   6. Tính giá trị đa thức.
def calculatePolynomial(a, n, x):
    sum = 0
    for i in range(0, n):
        sum += a[i]*x**i
    return sum


#   7. Cho 2 mảng a và b có m và n phần tử. Các phần tử trong mỗi mảng khác nhau từng đôi một. Tìm những giá trị cùng xuất hiện trên hai mảng. Mở rộng: giả sử có phần tử trùng
def findCommonValueInTwoArray(a, b, n, m):
    c = []
    for i in range(0, n):
        for j in range(0, m):
            if a[i] == b[j]:
                if a[i] not in c:
                    c.append(a[i])
    print(c)


#   8. Cho 2 mảng a và b có m và n phần tử. Nhập số q (nguyên dương). Tìm tổng a[i] + b[j] nhỏ nhất nhưng lớn hơn q.
def sumTwoElementGreaterThanQ(a, b, n, m, q):
    c = []
    x = y = 0
    while x < n and y < m:
        while y < m:
            if a[x] + b[y] > q:
                c.append([a[x], b[y]])
            y += 1
        y = 0
        x += 1
    return min(c)


#   9. Tính tổng (hiệu, tích, chia) hai số nguyên dương vô cùng lớn
def calculationBigPositiveInteger(a, b):
    print("Tổng: ", a + b)
    print("Hiệu: ", a - b)
    print("Tích: ", a * b)
    print("Thương: ", a / b)


#   10.In ra số nguyên tố lớn nhất (nếu có) trong mảng.
def findMaxPrimeNumber(a, n):
    c = []
    for i in range(0, n-1):
        if(primeNumber(a[i]) == True and a[i] > 0):
            c.append(a[i])
    if not c:
        return "Mảng không chứa số nguyên tố"
    return max(c)


#   11.Đếm số lượng số nguyên tố xuất hiện trong mảng nguyên dương có n phần tử.
def countPrimeNumber(a, n):
    c = []
    for i in range(0, n-1):
        if(primeNumber(a[i]) == True and a[i] > 0):
            c.append(a[i])
    if not c:
        return "Mảng không chứa số nguyên tố"
    return len(c)


#   12.In ra khoảng cách giữa phần tử lớn và nhỏ nhất trong mảng (có các phần tử khác nhau từng đôi một). Mở rộng: In ra khoảng cách xa nhất giữa phần tử lớn và nhỏ nhất trong mảng.
def findDistanceBtwMaxAndMin(a, n):
    k = 0
    j = 0
    for i in range(0, n):
        if a[i] == max(a):
            k = i
    for i in range(0, n):
        if a[i] == min(a):
            j = i
            break
    if k < j:
        for i in range(0, n):
            if a[i] == min(a):
                k = i
        for i in range(0, n):
            if a[i] == max(a):
                j = i
                break
    return abs(k-j)


# bai 6
# def Polinomial(x, n):
#     if n == 0:
#         return 1
#     return x**n + Polinomial(x, n-1)

# x = Polinomial(10,4)
# print(str(x)+'a')


def main():

    a = [180, 51, 180, -6, 15, -87, 21, -98, 4, 54, 30, 12, 65]
    #b = [99,87,54,32,12,9,4,1]
    c = [3, -1, 5, 2, 4, 4, 6, 8, 2, 1, 22]
    # 4x^4 + 2x^3 + 5x^2 -1x^1 + 3
    q = 8
    X = [4, 5, 6, 3, 6, 11, 33, 55]
    Y = [8, 1, 2, 14, 6, 66, 221]
    n = 5
    #index = 2
    #k = 5
    x = 4
    y = 5
    m = 5
    num1 = 3253252353263263463262362
    num2 = 31241253122153215

    list = []
    n = int(input('Number of list elements: '))
    inputList(list, n)

    # 2a
    # element = int(input('Number that you want to delete: '))
    # deleteElement(list, element)

    # 2b
    # print('Delete k element consecutive from list: ')
    # start = int(input('Start element: '))
    # k = int(input('Number of elements is deleted: k = '))
    # deleteConsecutive(list, start, k)

    # 2c
    # countDifference(list)

    # 2d
    # k = int(input('Position K that you want to check different elements in list: '))
    # countDifference_To_K(list, k)

    # 2e và câu 1 (giống nhau:))
    #print('2nd Large Number In List:', secondLargeNumber(list))

    # 2f
    # mostVisibleElement(list)

    # 2g
    # print('min element in [x,y]')
    # start = int(input('start element x = : '))
    # end = int(input('ending y = : '))
    # print(minInSubList(list, start, end))

    # 2h
    # print('sum of elements in k = [x,y]')
    # start = int(input('start element x = : '))
    # end = int(input('ending y = : '))
    # print(sumMax(list, start, end))

    # 2i và k (giống nhau)
    # specialSort(list)

    # 2j
    # print('Reverse List: ', reverseList(list))

    # 2l
    # squareNumberSort(list)

    # 2m
    # primeNumberSort(list)

    # 2n
    # m = int(input('Enter m = '))
    # changeList(list, m)

    # 2o
    # checkSort(list)

    longestSubArray(a, n)
    longestSubArrays(a, n)
    findMaxNegativeAndMinPositive(a, n)
    distance2DPoint(X, Y, n)
    mixedArray(X, Y, n, m)
    print(mixedAscendingArray(X, Y, n, m))
    print("Giá trị của biểu thức: ", calculatePolynomial(c, n, x))
    findCommonValueInTwoArray(X, Y, n, m)
    print("Hai phần tử trong hai mảng sao cho tổng nhỏ nhất và lớn hơn q : ",
          sumTwoElementGreaterThanQ(X, Y, n, m, q))
    print(calculationBigPositiveInteger(num1, num2))
    print("Số nguyên tố lớn nhất là: ", findMaxPrimeNumber(a, n))
    print("Số số nguyên tố trong mảng số dương: ", countPrimeNumber(a, n))
    print("Khoảng cách giữa phần tử lớn và nhỏ nhất trong mảng: ",
          findDistanceBtwMaxAndMin(a, n))


if __name__ == "__main__":
    main()
