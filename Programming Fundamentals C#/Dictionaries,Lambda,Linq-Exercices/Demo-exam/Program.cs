using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Program
{
    static void Main(string[] args)
    {

        int a = 10;
        int b = 20;
        AddToList(a,b);
        PrintList();

    }

    private static void PrintList()
    {
        int c = 5;
        Console.WriteLine(c);
    }

    private static void AddToList(int a,int b, int c)
    {
        c = a + b;
    }
}

