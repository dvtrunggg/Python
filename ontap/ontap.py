#include <iostream>
#include <stdio.h>
#include <string.h>
using namespace std;
#define MAX 100

//hàm xóa khoảng trắng ở đầu, cuối và ở giữa nếu tồn tại 2 khoảng trắng liên tiếp trở lên
void removeSpace(char str[MAX])
{
    int l = strlen(str);

    //xóa khoảng trắng ở đầu chuỗi
    while (str[0] == ' ')
    {
        strcpy(str, str + 1);
        l--;
    }

    //xóa khoảng trắng ở cuối chuỗi
    while (str[l - 1] == ' ')
    {
        strcpy(str + l - 1, str + l);
        l--;
    }

    //xóa khoảng trắng ở trong chuỗi nếu tồn tại 2 khoảng trắng liên tiếp nhau
    int i = 0;
    while (str[i] != '\0')
    {
        if (str[i] == ' ' && str[i + 1] == ' ')
        {
            strcpy(str + i, str + i + 1);
            i--;
            l--;
        }
        i++;
    }
}
//hàm chuẩn hóa: upcase ký tự đầu mỗi từ và lowercase các ký tự còn lại 
void standardizeString(char str[MAX])
{
    // xóa khoảng trắng dư thừa
    removeSpace(str);
    int l = strlen(str);
    int i = 0;

    //lowercase tất cả các ký tự
    while (str[i] != '\0')
    {
        str[i] = tolower(str[i]);
        i++;
    }

    //upcase các ký tự đầu của mỗi từ. Sau khi xóa khoảng trắng thì mỗi từ dc phân biệt = khoảng trắng ở giữa mỗi ký tự, từ đầu tiên thì chỉ cần in hoa ký tự đầu
    int j = 0;
    int flag = 0;
    while (str[j] != '\0')
    {
        if (flag == 0)
        {
            str[j] = toupper(str[j]);
            flag = 1;
        }
        else if (isspace(str[j]))
        {
            flag = 0;
        }
        j++;
    }
}
int main()
{
    // char str1[MAX];
    // cout << "Nhap chuoi: ";
    // gets(str1);    // em dùng g++ nên gets vẫn dùng được ạ:)

    char str[] = "   NGuyen    VAN   cU  ";
    cout << "\nChuoi ban dau:\n" << str << endl;
    standardizeString(str);
    cout << "Chuoi sau khi duoc chuan hoa:\n" << str << endl;
    return 0;
}