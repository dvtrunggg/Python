### Câu 3

num = 668686868686686868
num = int(input('Nhap so nguyen duong n (n>0): '))

# Cau3_a: dùng comprehension
checkComprehension = all([True if i == '6' or i == '8' else False for i in str(num) ]) 

#Cau3_b: dùng lambda
checkLambda = all(list(map(lambda x: x == '6' or x == '8', str(num)))) 

print(num, 'la so may man' if checkComprehension else 'khong phai la so may man')
print(num, 'la so may man' if checkLambda else 'khong phai la so may man')