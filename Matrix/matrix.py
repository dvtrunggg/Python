import numpy as np
import sympy
import sys
matrix = np.array([
    [6, -3, 4, 10],
    [10, 6, 11, 20],
    [-9, 10, 55, 21],
    [-6, -3, 12, 3]
])

matrixB = np.array([
    [4, 1, 2, 0],
    [21, 44, 1, -20],
    [-9, 0, 5, 100],
    [-6, 3, 12, 30]
])
rows = len(matrix)
cols = len(matrix[0])


def Print(matrix):
    print(matrix)

# Tính tổng tất cả các phần tử trên mảng.


def sommeDeMatrice(matrix):
    # cách 1: dùng thuật toán bình thường
    # sum = 0
    # for i in range(rows):
    #     for j in range(cols):
    #         sum += matrix[i][j]
    # print(sum)

    # cách 2: dùng numpy
    print("Somme de tous les elements de la matrice: ", np.sum(matrix))


# Đếm số lần xuất hiện một phần tử x bất kỳ.
def nombre_De_Occurrences(matrix, x):
    count = 0
    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] == x:
                count += 1
    print("Le nombre d'occurrences du ", x, "est ", count, "fois")


# Đếm số lần xuất hiện của các số nguyên tố.
def nombrePremier_Occurrences(matrix):

    listPremier = [matrix[i][j] for i in range(rows) for j in range(cols) if sympy.isprime(
        matrix[i][j])]  # sympy.isprime est methode pour chercher nombre premier (je veux tester au lieu d'ecrire la fonction de test principale)
    list = np.unique(listPremier)   # np.unique: values uniques du listPremier
    print('Nombres premiers sont: ', list)
    for i in list:
        nombre_De_Occurrences(matrix, i)

# Tính tổng tất cả các phần tử không âm.


def sommeNonNegatifs(matrix):
    sum = 0
    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] >= 0:
                sum += matrix[i][j]
    print("Somme des non nombres negatifs dans la matrice est: ", sum)

# Tính tổng các phần tử trên đường chéo chính.


def sommeDiagonale_Principale(matrix):
    if rows != cols:
        print("Ce n'est pas une matrice, entrez une matrice (tableaux a 2 dimensions avec lignes = columnes)")
        exit()

    # si utilise numpy
    diagonal_1 = sum(np.diagonal(matrix))

    # utilise l'algorithme
    # diagonal_1 = sum(matrix[i][i] for i in range(rows))  # các phần tử theo đường chéo chính\

    print("Somme des nombres sur la matrice principale en diagonale est: ", diagonal_1)

# Kiểm tra các phần tử trên đường chéo chính có tăng hay không.


def verifierTri_diaPrin(matrix):
    if rows != cols:
        print("Ce n'est pas une matrice, entrez une matrice (tableaux a 2 dimensions avec lignes = columnes)")
        exit()

    flag = False
    diagonal_1 = np.diagonal(matrix)
    for i in range(len(diagonal_1)-1):
        if diagonal_1[i+1] >= diagonal_1[i]:
            flag = True
        else:
            flag = False
    if flag:
        print('Nombres sur la matrice principale en diagonale sont disposes par ordre croissant')
    else:
        print("Nombres sur la matrice principale en diagonale ne sont pas par ordre croissant")


# Tính tổng các phần tử trên đường chéo phụ.
def sommeDiagonale_Secondaire(matrix):
    if rows != cols:
        print("Ce n'est pas une matrice, entrez une matrice (tableaux a 2 dimensions avec lignes = columnes)")
        exit()
    #diagonale_2 = [matrix[i][rows-1-i] for i in range(rows)] #utilise l'algorithme
    diagonale_2 = np.diag(np.fliplr(matrix)) #utilise numpy
    print("Nomme des nombres sur la matrice en diagonale secondaire est: ", sum(diagonale_2))


#Sắp xếp các phần tử trên mảng tăng dần trên từng dòng.
def triElements_Lignes(matrix):
    for i in range(rows):
        matrix[i].sort()
    print('Nouvelle matrice: ')
    Print(matrix)

#Tìm giá phần tử lớn nhất và nhỏ nhất trên từng dòng, từng cột, và trên toàn ma trận.
def minMax(matrix):
    minLigne , maxLigne , minCol , maxCol = [], [], [], []

    # dans chaque ligne
    for i in range(rows):
        minLigne.append(min(matrix[i]))
        maxLigne.append(max(matrix[i]))

    print("Nombres minimum dans lignes de matrice: ", minLigne)
    print("Nombre maximum dans lignes de matrice: ", maxLigne)
    
    #dans chaque comlumne
    for i in range(cols):
        minCol.append(min(matrix[:,i]))
        maxCol.append(max(matrix[:,i]))
    print("Nombres minimum dans columnes de matrice: ",  minCol)
    print("Nombres maximum dans columnes de matrice: ", maxCol)
    
    #max et min dans matrix: C'est le plus peptit nombre dans le tableau des plus petits nombres a des lignes (ou colume) de la matrice, idem pour trover max 
    print("Nombre maximum dans cette matrice: ", max(maxLigne))
    print("Nombre minimum dans cette matrice: ", min(minLigne))




#Tìm và đưa phần tử lớn nhất trên mỗi dòng về vị trí nằm trên đường chéo chính.
def remplacerDiagonale(matrix):
    if rows != cols:
        print("Ce n'est pas une matrice, entrez une matrice (tableaux a 2 dimensions avec lignes = columnes)")
        exit()

    for i in range(rows): 
        maxi = max(matrix[i])
        if matrix[i][i] == maxi:
            continue
        else:
            for j in range(cols):
                if matrix[i][j] == maxi:
                    matrix[i][j], matrix[i][i] = matrix[i][i], matrix[i][j]

    print('\nNouvelle matrice: ')
    Print(matrix)


#Tính tổng và tích 2 ma trận vuông n x n.
def additionMatrices(matrixA, matrixB):
    if len(matrixA) != len(matrixB) or len(matrixA[0]) != len(matrixB[0]):
        print('2 matrices ne sont pas de la meme taille')
        exit()

    #utilise l'algorithme
    # result = np.zeros((len(matrixA),len(matrixA)))
    # for i in range(rows):
    #     for j in range(cols):
    #         result[i][j] = matrixA[i][j] + matrixB[i][j]
    # print(result)

    #utilise numpy
    print('addition des 2 matrices: ')
    print(matrixA + matrixB)
    print('Multiplicaton des 2 matrices: ')
    print(matrixA * matrixB)
    
#Hãy sắp xếp ma trận A(m x n) sao cho dòng có tổng nhỏ hơn nằm ở trên và dòng có tổng lớn hơn nằm ở dưới.
def swapLignes(matrix):
    sommeLigne = []
    for i in range(rows):
        sommeLigne.append(sum(matrix[i]))
    print(sommeLigne)
    i = 0
    while (i < rows):
        maxIndex = sommeLigne.index(max(sommeLigne))

        matrix[[i, maxIndex]] = matrix[[maxIndex, i]]
        sommeLigne.remove(max(sommeLigne))
        i +=1

        
    print('Nouvelle matrice: ')
    Print(matrix)



def main():
    Print(matrix)

    # Tính tổng tất cả các phần tử trên mảng.
    # sommeDeMatrice(matrix)

    # Đếm số lần xuất hiện một phần tử x bất kỳ.
    #nombre_De_Occurrences(matrix, 10)

    # Đếm số lần xuất hiện của các số nguyên tố.
    # nombrePremier_Occurrences(matrix)

    # Tính tổng tất cả các phần tử không âm.
    # sommeNonNegatifs(matrix)

    # Tính tổng các phần tử trên đường chéo chính.
    # sommeDiagonale_Principale(matrix)

    # Kiểm tra các phần tử trên đường chéo chính có tăng hay không.
    #verifierTri_diaPrin(matrix)

    # Tính tổng các phần tử trên đường chéo phụ.
    #sommeDiagonale_Secondaire(matrix)

    #Sắp xếp các phần tử trên mảng tăng dần trên từng dòng.
    #triElements_Lignes(matrix)

    #Tìm giá phần tử lớn nhất và nhỏ nhất trên từng dòng, từng cột, và trên toàn ma trận.
    #minMax(matrix)

    #Tìm và đưa phần tử lớn nhất trên mỗi dòng về vị trí nằm trên đường chéo chính.
    #remplacerDiagonale(matrix)

    #Tính tổng và tích 2 ma trận vuông n x n.
    #additionMatrices(matrix, matrixB)

    #Hãy sắp xếp ma trận A(m x n) sao cho dòng có tổng nhỏ hơn nằm ở trên và dòng có tổng lớn hơn nằm ở dưới.
    #swapLignes(matrix)
    
    


if __name__ == "__main__":
    main()
