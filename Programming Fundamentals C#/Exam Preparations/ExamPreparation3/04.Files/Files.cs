using System;
using System.Collections.Generic;
using System.Linq;

public class Files
{
    public static void Main()
    {
        int numberOfFiles = int.Parse(Console.ReadLine());
        var files = new Dictionary<string, Dictionary<string, long>>();

        for (int i = 0; i < numberOfFiles; i++)
        {
            ReadFile(files);
        }

        var filesToPrint = Console.ReadLine().Split();
        var fileType = filesToPrint[0];
        var rootDirectory = filesToPrint[2];
        var isFound = false;

        foreach (var root in files.Where(r => r.Key == rootDirectory))
        {
            foreach (var file in root.Value.OrderByDescending(s => s.Value).ThenBy(n => n.Key))
            {
                var args = file.Key.ToString().Split('.');
                var currentType = args[args.Length - 1];
                if (currentType == fileType)
                {
                    Console.WriteLine($"{file.Key} - {file.Value} KB");
                    isFound = true;
                }
            }
        }

        if (!isFound)
        {
            Console.WriteLine("No");
        }
    }

    private static void ReadFile(Dictionary<string, Dictionary<string, long>> files)
    {
        var input = Console.ReadLine().Split(new char[] { ';', '\\' }, StringSplitOptions.RemoveEmptyEntries);
        var root = input[0];
        var fileSize = long.Parse(input[input.Length - 1]);
        var fileName = input[input.Length - 2];

        if (!files.ContainsKey(root))
        {
            var currentFile = new Dictionary<string, long>();
            currentFile.Add(fileName, fileSize);
            files.Add(root, currentFile);
        }
        else
        {
            files[root][fileName] = fileSize;
        }
    }
}

