import pandas as pd
import numpy as np

# Câu 4_a
def InNoiDungFile_CSV(filename):
    try:
        df = pd.read_csv(filename)

        #lọc ra data thỏa: WHO Region là Western Pacific, Cases - cumulative total > 50000 và Cases - Cases - newly reported in last 24 hours thuộc [100, 2500]
        df1 = df[(df['WHO Region'] == 'Western Pacific') 
            & (df['Cases - cumulative total'] > 50000) 
            & (df['Cases - newly reported in last 24 hours'] >= 100) 
            & (df['Cases - newly reported in last 24 hours'] <= 2500)]

        #thêm dòng dữ liệu về sum
        df1 = df1.append({'WHO Region': np.NaN, 'Name': 'Sum', 'Cases - cumulative total': df1['Cases - cumulative total'].sum(), 'Cases - newly reported in last 24 hours': df['Cases - newly reported in last 24 hours'].sum()}, ignore_index=True)
        return df1[['Name', 'Cases - cumulative total', 'Cases - newly reported in last 24 hours']] #lọc qua danh sách mà kết quả cần trả về
    except FileNotFoundError or IOError:
        print("Không tìm thấy File hoặc file đã bị lỗi ")


#Câu 4_b
def DocFile_CSV(filename):
    try:
        df = pd.read_csv(filename)

        #lọc records trong có giá trị WHO Region là Africa, Europe, South-East, Asia và chưa có trường hợp xác nhận
        df1 = df[((df['WHO Region'] == 'Africa') 
            | (df['WHO Region'] == 'Europe') 
            | (df['WHO Region'] == 'South-East') 
            | (df['WHO Region'] == 'Asia')) 
            & (df['Cases - cumulative total'] == 0)]
        return df1[['Name', 'WHO Region']]

    except FileNotFoundError or IOError:
        print("Không tìm thấy File hoặc file đã bị lỗi ")


#Câu 4_c
def GhiFile_CSV(file_name_output, lst):
    lst.to_csv(file_name_output, index = False)



#hàm main
if __name__ == '__main__':
    filename = 'WHO-COVID-19-global-table-data.csv'

    #Câu 4_a
    print('Cau 4a \n\t\tWestern Pacific Region \n', InNoiDungFile_CSV(filename))

    #Câu 4_b
    print('Cau 4b', DocFile_CSV(filename))

    #Câu 4_c
    GhiFile_CSV('ketqua.csv', DocFile_CSV(filename))
