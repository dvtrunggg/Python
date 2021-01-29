import urllib.request
import re
import string as str
import matplotlib.pyplot as plt
import pandas as pd

# fontion récupère les données sur 1 page web avec format est txt
def queryTXT():
    url = 'http://www.textfiles.com/etext/AUTHORS/SHAKESPEARE/shakespeare-romeo-48.txt'
    text = urllib.request.urlopen(url).read().decode('utf8')
    return text

# fonction écrit des données dans fichier
# data est un string que on vient de récupèrer en haut du fichier (fonction queryTXT)
# la command 'with open' fermara automatiquement le fichier sans utiliser f.close()
# cette fonction vous ne devriez pas l'utiliser pour cet article 
# #car les données qu'il extrait de la page Web seront beaucoup de texte, 
# ce qui rendra les graphiques plus déroutants.
#alors, J'ai préparé un petit document pour tester
def writeFile(fileName):
    with open(fileName, 'w') as f:
        data = queryTXT()
        f.write(data)


# read file
def readFile(fileName):
    with open(fileName, 'r', encoding='utf-8') as f:
        data = f.read()
        return data


# fonction qui obtient key de value
# dic est ditionary et val est value que vous obtenez
def getKey(dic, val):
    flag = False
    list = []
    for key, value in dic.items():
        if val == value:
            flag = True
            list.append(key)

    if flag:
        return list
    else:
        return flag


# nombre d'ocurrence de mots
# dic2 est un dictionary pour soutenir de function Graph
# version 1: n'utiliser pas pandas
def occurenceMots(fileName, dic2={}):
    string = readFile(fileName)
    dic = {}
    # obtenir tous les mots de string
    res = re.findall(r'\w+', string)
    for mot in res:
        count = string.count(mot)
        dic[mot] = count
        # print("nombre d'occurence de '"+ mot+ "' est: ", count)

    # suppimer les mêmes éléments dans listValuesSort
    temp = set(dic.values())
    listValuesSort = sorted(temp)  # sort values de temp

    # listValuesSort est une tableur qui a les élément n'sont pas les même est et sont triés

    j = 0
    # dic2 = {}
    while j < len(listValuesSort):
        # fonction qui obtient key de value # dic est ditionary et val est value que vous obtenez
        value = listValuesSort[j]
        key = getKey(dic, value)
        print('#\t', key, 'apparu', value, 'fois', '\n')
        dic2[value] = key  # car on ne peut pas faire hashtable un list
        j += 1


# version 2: utiliser pandas
def occurencePandas(fileName):
    string = readFile(fileName)
    dic = {}
    # obtenir tous les mots de string
    res = re.findall(r'\w+', string)
    for mot in res:
        count = string.count(mot)
        dic[mot] = count
        # print("nombre d'occurence de '"+ mot+ "' est: ", count)

    # suppimer les mêmes éléments dans listValuesSort
    temp = set(dic.values())
    listValuesSort = sorted(temp)  # sort values de temp
    listKey = []

    for i in listValuesSort:
        key = getKey(dic, i)
        listKey.append(key)
    
    ##listValuesSort est une tableur qui a les élément n'sont pas les même est et sont triés
    data = {'Mot': pd.Series(listKey),
        'Occurrence': pd.Series(listValuesSort)}
    df = pd.DataFrame(data)
    #car df première ligne contient la chaîne qui est tout du texte, par conséquent, on n'obtiendre que de la ligne numéro 1 à la fin
    d = df.iloc[1:]
    #print(listKey)
    return d


# Graphique montre l'occurrence des mots
def Graph(fileName):
    df = occurencePandas(fileName)
    df.plot(x = 'Mot', y = 'Occurrence', kind = 'line')
    plt.show()

# fonction main pour appeller tout les fonctions


def main():
    # cette fonction vous ne devriez pas l'utiliser pour cet article 
    # #car les données qu'il extrait de la page Web seront beaucoup de texte, 
    # ce qui rendra les graphiques plus déroutants.
    #alors, J'ai préparé un petit document pour tester
    #writeFile('data.txt')

    print(readFile('data.txt'))

    #fonction que afficher et trier l'occurrence du mot dans le texte
    print(occurencePandas('data.txt'))

    #fonction que représentation féroce sur le graphique
    Graph('data.txt')


if __name__ == "__main__":
    main()
