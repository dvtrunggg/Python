### Câu 2

#Câu 2a
str1 = '192.024.001.0230'
str2 = '005.004.001.020'

Cau2_a1 = '.'.join([i.lstrip('0') for i in str1.split('.')]) 

Cau2_a2 = '.'.join([i.lstrip('0') for i in str2.split('.')])

n = int(input('Nhap so nguyen duong n (n>0): '))
Cau2_a3 = [i for i in range(n) if i % 2 == 0]

#Câu 2b
ga_va_cho = 36 # tổng số con gà và chó
chan_ga_cho = 100 # tổng số chân gà và chân chó

Cau2_b = [[ga, cho] for cho in range(1, ga_va_cho) for ga in range(1, ga_va_cho) if ga + cho == ga_va_cho and ga*2 + cho * 4 == chan_ga_cho]
Cau2_b

if __name__ == "__main__":
    # Nhập số n > 0, in ra các số chẵn X <= n
    print(Cau2_a1)
    print(Cau2_a2)

    print(Cau2_a3)

    print('So ga: ', Cau2_b[0][0], '\nSo cho: ', Cau2_b[0][1])