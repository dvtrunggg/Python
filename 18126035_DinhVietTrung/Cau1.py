import random
import math

#Câu 1

#Câu 1a
#Hàm return về list có n ptu, các giá trị thuộc [1, 5000]
def Cau1_a(): 
    while True:
    #try except nếu n không phải là kiểu int
        try:
            n = int((input('Nhap so n: ')))
        except ValueError:
            print("Phai nhap so nguyen duong, moi nhap lai!")
        else:
            if n >= 10 and n <= 1000:
                break 
            else: 
                print('Chi nhan gia tri tu 10 den 1000. Yeu cau nhap lai!')
    lst = []           
    for i in range(n):
        r = random.randint(1, 5000 + 1)
        if r not in lst:
            lst.append(r)
    return lst

            

#Câu 1b
# hàm tìm ước chung lớn nhất của 2 số a và b
def findGCD(a, b):
    if b == 0:
        return a;
    return findGCD(b, a % b);

#hàm tìm số nghịch đảo
#vd: 19 có reverse là 91
def reverse(num):
  return int(str(num)[::-1])

#hàm ktra số n có là số thân thiện hay ko
def isFrendlyNumber(n):
    #sử dụng math.gcd hoặc có thể sử dụng hàm findGCD định nghĩa ở trên
    #if findGCD(n, reverse(n) == 1:
    if math.gcd(n, reverse(n)) == 1: 
        return True
    return False
    
# hàm liệt kê các số thân thiện trong list
#cách 1: dùng filter
def Cau1_b_filter(lst):
    lstTemp = list(filter(isFrendlyNumber, lst))
    if len(lst) == 0:
        print('Trong list khong chua so than thien')
    else:
        print('Cac so than thien co trong list la: ', lstTemp)


#cách 2: dùng loop
def Cau1_b_loop(lst):
    lstTemp = [i for i in lst if isFrendlyNumber(i)]
    if len(lst) == 0:
        print('Trong list khong chua so than thien')
    else:
        print('Cac so than thien co trong list la: ', lstTemp)

#Câu 1c
#hàm ktra số num là strobogrammatic number hay ko
def isStrobogrammatic(num):
    comb = "00 11 88 69 96"
    i = 0
    j = len(num) - 1
    while i <= j:
        x = comb.find(num[i]+num[j])
        if x == -1:
            return False
        i += 1
        j -= 1
    return True


#Hàm ktra số num là số ngto
#num là str (vd: '11')
def isPrime(num):
    num = int(num)  #convert string to int
    for n in range(2,int(num**1/2)+1):
        if num%n==0:
            return False
    return True


# Hàm ktra số num là số ngto strobogrammatic (strobogrammatic prime number)
# num là số ở dạng string
def is_trobogrammatic_prime(num):
    if isPrime(num) and isStrobogrammatic(num):
        return True
    return False


def Cau1_c(lst):
    lst_str_num = list(map(str, lst))
    lst_strobogrammatic_prime = list(filter(is_trobogrammatic_prime, lst_str_num))
    lstNum = [int(i) for i in lst_strobogrammatic_prime]
    if len(lstNum) == 0:
        print('Trong list khong chua so nguyen to strobogrammatic')
    else:
        print('Cac so nguyen to strobogrammatic co trong list la: ', lstNum)


#hàm hình tổng bình phương các chữ số của n
#vd: n = 25 => return 2^2 + 5^2 = 29
def numSquareSum(n):
    squareSum = 0;
    while(n):
        squareSum += (n % 10) * (n % 10);
        n = int(n / 10);
    return squareSum;
 

# hàm ktra số n có phải là happy number (số may mắn)
def isHappynumber(n):
    slow = n;
    fast = n;
    while(True):
        slow = numSquareSum(slow);
        fast = numSquareSum(numSquareSum(fast));
        
        if(slow != fast):
            continue;
        else:
            break;
    # nếu 2 số "meet at" 1 => return true
    return (slow == 1);


def Cau1_d(lst):
    resultList = [i for i in lst if isHappynumber(i)]
    if len(resultList) == 0:
        print('Trong list khong chua so may man')
    else:
        print('Cac so may man co trong list la: ', resultList)


#hàm main
if __name__ == '__main__':
    lst = Cau1_a()
    #print(lst)

    Cau1_b_filter(lst)
    Cau1_c(lst)
    Cau1_d(lst)