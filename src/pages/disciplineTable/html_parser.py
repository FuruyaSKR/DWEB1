from bs4 import BeautifulSoup
import collections

html_content = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disciplinas</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        li {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
    </style>
</head>

<body>
    <div>
        <h1>Dados</h1>
        <ul>
            <li>
                <h2>Nome:</h2>
                <h2>Victor Hugo Z.</h2>
            </li>
            <li>
                <h2>Matricula:</h2>
                <h2>09309.44425.02</h2>
            </li>
            <li>
                <h2>Ano Entrada:</h2>
                <h2>2019.01</h2>
            </li>
        </ul>
    </div>
    <table>
        <thead>
            <tr>
                <th>Código da Disciplina</th>
                <th>Nome da Disciplina</th>
                <th>Professor</th>
                <th>Nota</th>
                <th>Faltas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MAT101</td>
                <td>Matemática Básica</td>
                <td>Fernando Costa</td>
                <td>8.5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>FIS201</td>
                <td>Física Clássica</td>
                <td>Ana Pereira</td>
                <td>7.8</td>
                <td>3</td>
            </tr>
            <tr>
                <td>QUI301</td>
                <td>Química Orgânica</td>
                <td>Fernando Costa</td>
                <td>9.2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>HIS401</td>
                <td>História Medieval</td>
                <td>Maria Oliveira</td>
                <td>7.5</td>
                <td>4</td>
            </tr>
            <tr>
                <td>LIT501</td>
                <td>Literatura Brasileira</td>
                <td>Roberto Freitas</td>
                <td>8.0</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
</body>

</html>"""

soup = BeautifulSoup(html_content, 'html.parser')
table = soup.find('table')

data = []
for row in table.find_all('tr')[1:]:
    cols = row.find_all('td')
    data.append({
        'codigo': cols[0].text.strip(),
        'disciplina': cols[1].text.strip(),
        'professor': cols[2].text.strip(),
        'nota': float(cols[3].text.strip()),
        'faltas': int(cols[4].text.strip())
    })

media_notas = sum(d['nota'] for d in data) / len(data)
disciplina_mais_faltas = max(data, key=lambda x: x['faltas'])
professores = collections.defaultdict(list)
for d in data:
    professores[d['professor']].append(d)
professor_mais_disciplinas = max(professores, key=lambda x: len(professores[x]))
for professor in professores:
    professores[professor] = sorted(professores[professor], key=lambda x: x['faltas'])

print(f"Média das notas: {media_notas}")
print(f"Disciplina com mais faltas: {disciplina_mais_faltas['disciplina']} com {disciplina_mais_faltas['faltas']} faltas")
print(f"Professor com mais disciplinas: {professor_mais_disciplinas}")
print("\nReagrupamento por professor e faltas crescentes:\n")
for professor, disciplinas in professores.items():
    print(f"{professor}:")
    for disciplina in disciplinas:
        print(f"  - Disciplina: {disciplina['disciplina']}, Faltas: {disciplina['faltas']}")
