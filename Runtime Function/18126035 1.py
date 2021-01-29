import random
import time

# create a vector list
list = []
n = int(input("Input the numbers of vector: "))
for i in range(0, n):
    number = random.randint(0, 1000000)
    list.append(number)

# selectionSort Example
def Trier(list):
    
    for i in range(n-1):
        minIndex = i
        for j in range(i+1, n-1):
            if list[minIndex] > list[j]:
                minIndex = j
        list[i], list[minIndex] = list[minIndex], list[i]

#use sort methode in python
def pythonTrier(list):
    list.sort()

def main():
    # #calculate time
    
    startTime = time.time()
    #Trier(list)        #Selection Sort
    # pythonTrier(list)   #Sort methode in python
    #print(list)

    stopTime = time.time()
    print("Time is: ", stopTime - startTime)

main()