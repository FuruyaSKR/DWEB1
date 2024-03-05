from bs4 import BeautifulSoup

file_path = 'discipline-table.html'
with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

soup = BeautifulSoup(content, 'html.parser')

rows = soup.find_all('tr')[1:]  

notas_disciplinas = []
faltas_disciplinas = []

for row in rows:
    cols = row.find_all('td')
    disciplina = cols[1].text
    nota = float(cols[3].text)
    faltas = int(cols[4].text)

    notas_disciplinas.append((disciplina, nota))
    faltas_disciplinas.append((disciplina, faltas))

notas_disciplinas.sort(key=lambda x: x[1], reverse=True) 
faltas_disciplinas.sort(key=lambda x: x[1], reverse=True)

max_faltas = faltas_disciplinas[0][1]
disciplinas_com_mais_faltas = [d for d in faltas_disciplinas if d[1] == max_faltas]

notas_disciplinas[:5], disciplinas_com_mais_faltas 
