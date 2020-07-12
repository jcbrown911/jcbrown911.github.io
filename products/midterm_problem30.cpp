#include <iostream>
#include <fstream>

using namespace std;

int main()
{
	ifstream input_file;
	
	input_file.open("problem30.txt");
	
	string name;
	int age;
	
	if(input_file.fail())
	{
		cout << "File could not be opened." << endl;
		cout << "The program is ending." << endl;
	}
	
	else
	{
		while(input_file >> name >> age)
		{
			cout << name << " is " << age << " years old.\n" << endl;
		}
	}
	return 0;
}