using System;
using System.Collections.Generic;
using System.Linq;

class Team
{
    public int Goals { get; set; }
    public int Standings { get; set; }
}

public class FootballLeague
{
    public static void Main()
    {
        var key = Console.ReadLine();
        var teams = new Dictionary<string, Team>();

        while (true)
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            if (input[0].Equals("final"))
            {
                break;
            }

            var firstTeamName = GetTeamName(input[0],key);
            var secondTeamName = GetTeamName(input[1],key);
            var scores = input[2].Split(':');
            var firstTeamScore = int.Parse(scores[0]);
            var secondTeamScore = int.Parse(scores[1]);

            if (firstTeamScore > secondTeamScore)
            {
                AddScore(3,teams,firstTeamName);
                AddScore(0, teams, secondTeamName);
            }
            else if (firstTeamScore < secondTeamScore)
            {
                AddScore(0, teams, firstTeamName);
                AddScore(3, teams, secondTeamName);
            }
            else
            {
                AddScore(1, teams, firstTeamName);
                AddScore(1, teams, secondTeamName);
            }

            teams[firstTeamName].Goals += firstTeamScore;
            teams[secondTeamName].Goals += secondTeamScore;
        }

        var standing = teams.OrderByDescending(t => t.Value.Standings).ThenBy(t => t.Key);
        var count = 1;
        Console.WriteLine("League standings:");
        foreach (var team in standing)
        {
            Console.WriteLine($"{count}. {team.Key} {team.Value.Standings}");
            count++;
        }

        var goals = teams.OrderByDescending(t => t.Value.Goals).ThenBy(t => t.Key).Take(3);
        Console.WriteLine("Top 3 scored goals:");
        foreach (var team in goals)
        {
            Console.WriteLine($"- {team.Key} -> {team.Value.Goals}");
        }
    }

    private static void AddScore(int score,Dictionary<string, Team> teams, string teamName)
    {
        if (!teams.ContainsKey(teamName))
        {
            var team = new Team { Standings = score,Goals = 0 };
            teams.Add(teamName, team);
        }
        else
        {
            teams[teamName].Standings += score;
        }
    }

    private static string GetTeamName(string team,string key)
    {
        var teamName = team.Substring(team.IndexOf(key) + key.Length);
        teamName = teamName.Substring(0, teamName.IndexOf(key));
        teamName = new string(teamName.ToCharArray().Reverse().ToArray());

        return teamName.ToUpper().Trim();
    }
}

