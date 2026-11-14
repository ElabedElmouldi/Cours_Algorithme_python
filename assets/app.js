
const EDI='https://www.online-python.com/';
const C=[
{id:'dem',t:'1. Démarche de résolution d’un problème',intro:'Avant d’écrire la moindre ligne de code, on suit une <b>démarche</b> en 6 étapes. Le résultat de chaque étape est la <b>matière première</b> de l’étape suivante.',S:[]},
{id:'sd',t:'2. Structures de données',intro:'Tout algorithme manipule des <b>objets</b> (constantes, variables) ayant un <b>type</b>. Le type détermine les valeurs possibles, les <b>opérateurs</b> applicables et les <b>fonctions prédéfinies</b> utilisables.',S:[],html:`
<div class="card"><h3>Constantes et variables</h3><p><b>Constante</b> : objet dont la valeur ne change pas pendant l’exécution. <b>Variable</b> : objet dont la valeur peut changer ; il a un <i>nom</i>, un <i>type</i> et une <i>valeur</i>. Les deux sont décrits dans le TDO.</p>
<div class="cols"><pre>TDO
Objet | Type / nature | Rôle
PI    | Constante = 3.14 | π
r     | Réel   | Rayon
S     | Réel   | Surface</pre><pre>PI = 3.14        # constante (majuscules)
r = float(input("r = "))
S = PI * r * r    # S ← PI * r * r
print(S)</pre></div></div>
<div class="card"><h3>Types de données</h3><table><tr><th>Type</th><th>Exemples</th><th>Python</th></tr>
<tr><td>Entier</td><td>5, −3, 0</td><td>int</td></tr><tr><td>Réel</td><td>3.14, −0.5</td><td>float</td></tr>
<tr><td>Booléen</td><td>Vrai, Faux</td><td>bool (True, False)</td></tr><tr><td>Caractère</td><td>'a', '#'</td><td>str de longueur 1</td></tr>
<tr><td>Chaîne de caractères</td><td>"Bonjour"</td><td>str</td></tr><tr><td>Tableau</td><td>T[0..4] d’entiers</td><td>array, numpy.ndarray</td></tr></table></div>
<div class="card"><h3>Opérateurs selon le type</h3><table><tr><th>Type</th><th>Opérateurs</th><th>Python</th></tr>
<tr><td>Entier</td><td>+ − * / DIV MOD ; = ≠ &lt; &gt; ≤ ≥</td><td>+ - * / // % ; == != &lt; &gt; &lt;= &gt;=</td></tr>
<tr><td>Réel</td><td>+ − * / ; = ≠ &lt; &gt; ≤ ≥ (DIV et MOD réservés aux entiers)</td><td>+ - * / ** ; comparaisons</td></tr>
<tr><td>Booléen</td><td>ET, OU, NON ; = ≠</td><td>and, or, not ; == !=</td></tr>
<tr><td>Caractère</td><td>= ≠ &lt; &gt; ≤ ≥ (ordre ASCII)</td><td>comparaisons, ord(), chr()</td></tr>
<tr><td>Chaîne</td><td>+ (concaténation) ; = ≠ &lt; &gt; (ordre alphabétique) ; ch[i] (accès)</td><td>+ ; == != &lt; &gt; ; ch[i]</td></tr>
<tr><td>Tableau</td><td>T[i] (accès / modification d’un élément)</td><td>T[i] ; numpy : T + 1 sur tout le tableau</td></tr></table></div>
<div class="card"><h3>Fonctions prédéfinies les plus utilisées</h3><table><tr><th>Type</th><th>Algorithmique</th><th>Python</th></tr>
<tr><td rowspan="5">Entier / Réel</td><td>Abs(x)</td><td>abs(x)</td></tr><tr><td>Racine_carrée(x)</td><td>math.sqrt(x)</td></tr><tr><td>Ent(x) (partie entière)</td><td>int(x), math.floor(x)</td></tr><tr><td>Arrondi(x)</td><td>round(x)</td></tr><tr><td>Aléa(a, b)</td><td>random.randint(a, b)</td></tr>
<tr><td rowspan="3">Caractère</td><td>Ord(c)</td><td>ord(c)</td></tr><tr><td>Chr(n)</td><td>chr(n)</td></tr><tr><td>Majus(c)</td><td>c.upper()</td></tr>
<tr><td rowspan="7">Chaîne</td><td>Long(ch)</td><td>len(ch)</td></tr><tr><td>Pos(ch1, ch2)</td><td>ch2.find(ch1) (−1 si absent)</td></tr><tr><td>Sous_chaine(ch, d, f)</td><td>ch[d:f]</td></tr><tr><td>Effacer(ch, d, f)</td><td>ch[:d] + ch[f:]</td></tr><tr><td>Majus(ch) / Minus(ch)</td><td>ch.upper() / ch.lower()</td></tr><tr><td>Estnum(ch)</td><td>ch.isdigit()</td></tr><tr><td>Valeur(ch) / Convch(x)</td><td>int(ch), float(ch) / str(x)</td></tr>
<tr><td rowspan="3">Tableau</td><td>taille</td><td>len(T)</td></tr><tr><td>somme, min, max</td><td>T.sum(), T.min(), T.max() (numpy)</td></tr><tr><td>création</td><td>array('i',[0]*n), np.zeros((l,c),dtype=int)</td></tr></table>
<p style="font-size:.85rem">Pour utiliser <code>math</code> ou <code>numpy</code> : <code>import math</code>, <code>import numpy as np</code>.</p></div>
<div class="card"><h3>Essayer les opérateurs</h3><div class="ctl" style="margin-top:0">a = <input id="da" type="text" value="17" style="width:60px"> b = <input id="db" type="text" value="5" style="width:60px"></div><pre id="dout"></pre></div>`},
{id:'mod',t:'3. Modularité',intro:'Un problème complexe se décompose en modules : <b>fonction</b> (retourne un résultat) et <b>procédure</b> (n’en retourne pas). Paramètres <i>formels</i> (déclaration) et <i>effectifs</i> (appel). Portée : variable <i>locale</i> (dans le module) ou <i>globale</i>.',S:[
{t:'Fonction : carré d’un entier',tdo:[['x','Entier','Paramètre formel'],['Carre','Fonction → Entier','Module']],a:`Fonction Carre(x : Entier) : Entier
Début
  Carre ← x * x
Fin

Algorithme Principal
Début
  Écrire("Carré de 7 = ", Carre(7))
Fin`,p:`def carre(x):
    return x * x

print("Carré de 7 =", carre(7))`},
{t:'Procédure : afficher une ligne d’étoiles',tdo:[['n','Entier','Paramètre formel'],['i','Entier','Variable locale'],['Etoiles','Procédure','Module']],a:`Procédure Etoiles(n : Entier)
Début
  Pour i de 1 à n faire
    Écrire("*")
  Fin Pour
Fin`,p:`def etoiles(n):
    for i in range(1, n + 1):
        print("*", end="")
    print()

etoiles(5)   # appel avec le paramètre effectif 5`}]},
{id:'ch',t:'4. Chaînes',intro:'Fonctions prédéfinies : <code>Long</code>, <code>Pos</code>, <code>Sous_chaine(ch, d, f)</code> (position f exclue), <code>Effacer(ch, d, f)</code>, <code>Estnum</code>, <code>ConvCh</code>, <code>Valeur</code>.',S:[
{t:'Compter les voyelles',tdo:[['ch','Chaîne','Donnée'],['i, nb','Entier','Compteur'],['v','Chaîne','Constante "aeiouy"']],a:`Algorithme Voyelles
Début
  Écrire("ch = "), Lire(ch)
  nb ← 0
  Pour i de 0 à Long(ch)-1 faire
    Si Pos(ch[i], "aeiouy") ≠ -1 alors
      nb ← nb + 1
    Fin Si
  Fin Pour
  Écrire("Nombre de voyelles : ", nb)
Fin`,p:`ch = input("ch = ").lower()
nb = 0
for i in range(len(ch)):
    if ch[i] in "aeiouy":
        nb += 1
print("Nombre de voyelles :", nb)`},
{t:'Sous_chaine et Effacer',tdo:[['ch, s','Chaîne','Donnée / résultat'],['d, f','Entier','Positions']],a:`ch ← "informatique"
s ← Sous_chaine(ch, 0, 5)     // "infor"  (positions 0 à 4)
Effacer(ch, 0, 5)             // ch = "matique"`,p:`ch = "informatique"
s = ch[0:5]            # Sous_chaine(ch,0,5) -> "infor"
ch = ch[:0] + ch[5:]   # Effacer(ch,0,5)    -> "matique"
print(s, ch, ch.find("tiq"))   # find = Pos`}]},
{id:'tab',t:'5. Tableaux',intro:'Tableau à une dimension : éléments de même type, <b>indices</b> à partir de 0, <b>taille</b> fixe. Python : <code>array</code> et <code>numpy</code> (1D et 2D).',S:[
{t:'Remplir, somme, minimum et maximum',tdo:[['n','Entier','Taille'],['T','Tableau de n Entiers','Donnée'],['i','Entier','Indice'],['S, mini, maxi','Entier','Résultats']],a:`Algorithme SomMinMax
Début
  Écrire("n = "), Lire(n)
  Pour i de 0 à n-1 faire
    Lire(T[i])
  Fin Pour
  S ← 0 ; mini ← T[0] ; maxi ← T[0]
  Pour i de 0 à n-1 faire
    S ← S + T[i]
    Si T[i] < mini alors mini ← T[i]
    Si T[i] > maxi alors maxi ← T[i]
  Fin Pour
  Écrire(S, mini, maxi)
Fin`,p:`from array import array
n = int(input("n = "))
T = array('i', [0] * n)
for i in range(n):
    T[i] = int(input(f"T[{i}] = "))
S, mini, maxi = 0, T[0], T[0]
for i in range(n):
    S += T[i]
    if T[i] < mini: mini = T[i]
    if T[i] > maxi: maxi = T[i]
print(S, mini, maxi)`},
{t:'Avec numpy : 1D et 2D',tdo:[['V','Tableau 1D de 5 Entiers','Vecteur'],['M','Tableau 2D 3×3 d’Entiers','Matrice']],a:`T ← Tableau de 5 Entiers
M ← Tableau de 3 lignes, 3 colonnes d'Entiers
M[1][2] ← 8`,p:`import numpy as np
V = np.zeros(5, dtype=int)
M = np.zeros((3, 3), dtype=int)
M[1][2] = 8
V[:] = [4, 9, 1, 7, 3]
print(V.sum(), V.min(), V.max())
print(M)`}]},
{id:'sel',t:'6. Selon',intro:'<b>Selon</b> fait partie des traitements conditionnels (voir aussi Si … Sinon dans le chapitre précédent). Structure à choix multiple : <b>Selon</b> sélecteur, valeurs, <b>Sinon</b>. En Python : <code>if / elif / else</code> (ou <code>match</code>).',S:[
{t:'Mention selon la note',tdo:[['note','Entier','Donnée'],['mention','Chaîne','Résultat']],a:`Algorithme Mention
Début
  Lire(note)
  Selon note
    0..9   : mention ← "Ajourné"
    10..11 : mention ← "Passable"
    12..13 : mention ← "Assez bien"
    14..15 : mention ← "Bien"
    16..20 : mention ← "Très bien"
    Sinon  : mention ← "Note invalide"
  Fin Selon
  Écrire(mention)
Fin`,p:`note = int(input("note = "))
if 0 <= note <= 9: mention = "Ajourné"
elif note <= 11:   mention = "Passable"
elif note <= 13:   mention = "Assez bien"
elif note <= 15:   mention = "Bien"
elif note <= 20:   mention = "Très bien"
else:              mention = "Note invalide"
print(mention)`}]},
{id:'it',t:'7. Répéter / Tant que',intro:'<b>Répéter … Jusqu’à</b> : condition d’arrêt, au moins un passage. <b>Tant que … Faire</b> : condition de continuité, peut ne jamais s’exécuter.',S:[
{t:'Saisie contrôlée (Répéter)',tdo:[['n','Entier','Donnée (1 ≤ n ≤ 100)']],a:`Répéter
  Écrire("n = "), Lire(n)
Jusqu'à (n ≥ 1) ET (n ≤ 100)`,p:`while True:
    n = int(input("n = "))
    if 1 <= n <= 100:
        break`},
{t:'PGCD (Euclide) et PPCM',tdo:[['a, b','Entier','Données'],['x, y, r','Entier','Variables de travail'],['Pgcd','Fonction → Entier','Module']],a:`Fonction Pgcd(a, b : Entier) : Entier
Début
  Tant que b ≠ 0 faire
    r ← a MOD b
    a ← b
    b ← r
  Fin Tant que
  Pgcd ← a
Fin
// PPCM(a,b) = (a * b) DIV Pgcd(a,b)`,p:`import math
def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

a, b = 24, 36
print(pgcd(a, b), math.gcd(a, b), a * b // pgcd(a, b))`},
{t:'Nombre premier et décomposition en facteurs premiers',tdo:[['n','Entier','Donnée (n ≥ 2)'],['d','Entier','Diviseur testé'],['Premier','Fonction → Booléen','Module']],a:`Fonction Premier(n : Entier) : Booléen
Début
  d ← 2
  Tant que (d*d ≤ n) ET (n MOD d ≠ 0) faire
    d ← d + 1
  Fin Tant que
  Premier ← (d*d > n)
Fin
// Décomposition : tant que n > 1, diviser n par d
// tant que d | n ; sinon d ← d + 1`,p:`import math
def premier(n):
    d = 2
    while d <= math.isqrt(n) and n % d != 0:
        d += 1
    return d > math.isqrt(n)

n, d, f = 360, 2, []
while n > 1:
    if n % d == 0:
        f.append(d); n //= d
    else:
        d += 1
print(premier(97), f)   # True [2, 2, 2, 3, 3, 5]`}]},
{id:'rech',t:'8. Recherches',anim:'rech',intro:'On parcourt le tableau de gauche à droite et on s’arrête dès que la valeur est trouvée ou que le tableau est épuisé (<b>Tant que</b> à condition de continuité).',S:[
{t:'Recherche séquentielle d’un élément',tdo:[['T','Tableau de n Entiers','Donnée'],['x','Entier','Valeur cherchée'],['i','Entier','Indice courant'],['trouve','Booléen','Drapeau']],a:`Fonction Recherche(T, n, x) : Booléen
Début
  i ← 0
  Tant que (i < n) ET (T[i] ≠ x) faire
    i ← i + 1
  Fin Tant que
  Recherche ← (i < n)
Fin`,p:`import numpy as np
T = np.array([12, 5, 9, 31, 7])
x, i = 9, 0
while i < len(T) and T[i] != x:
    i += 1
print("trouvé à l'indice", i) if i < len(T) else print("absent")`}]},
{id:'tri',t:'9. Tris',anim:'tri',intro:'Trier = ranger les éléments dans l’ordre croissant. Trois méthodes : <b>sélection</b> (chercher le minimum), <b>à bulles</b> (échanger les voisins mal placés), <b>insertion</b> (insérer chaque élément dans la partie triée).',S:[
{t:'Tri par sélection',tdo:[['T','Tableau de n Entiers','Donnée/résultat'],['i, j, pm','Entier','Indices (pm = position du min)'],['aux','Entier','Échange']],a:`Pour i de 0 à n-2 faire
  pm ← i
  Pour j de i+1 à n-1 faire
    Si T[j] < T[pm] alors pm ← j
  Fin Pour
  Si pm ≠ i alors
    aux ← T[i] ; T[i] ← T[pm] ; T[pm] ← aux
  Fin Si
Fin Pour`,p:`def tri_selection(T):
    n = len(T)
    for i in range(n - 1):
        pm = i
        for j in range(i + 1, n):
            if T[j] < T[pm]: pm = j
        T[i], T[pm] = T[pm], T[i]
    return T
print(tri_selection([9, 4, 7, 1, 8]))`},
{t:'Tri à bulles',tdo:[['T','Tableau de n Entiers','Donnée/résultat'],['i, j','Entier','Indices'],['aux','Entier','Échange']],a:`Pour i de n-1 à 1 (pas -1) faire
  Pour j de 0 à i-1 faire
    Si T[j] > T[j+1] alors
      aux ← T[j] ; T[j] ← T[j+1] ; T[j+1] ← aux
    Fin Si
  Fin Pour
Fin Pour`,p:`def tri_bulles(T):
    for i in range(len(T) - 1, 0, -1):
        for j in range(i):
            if T[j] > T[j + 1]:
                T[j], T[j + 1] = T[j + 1], T[j]
    return T
print(tri_bulles([9, 4, 7, 1, 8]))`},
{t:'Tri par insertion',tdo:[['T','Tableau de n Entiers','Donnée/résultat'],['i, j','Entier','Indices'],['cle','Entier','Élément à insérer']],a:`Pour i de 1 à n-1 faire
  cle ← T[i] ; j ← i - 1
  Tant que (j ≥ 0) ET (T[j] > cle) faire
    T[j+1] ← T[j]
    j ← j - 1
  Fin Tant que
  T[j+1] ← cle
Fin Pour`,p:`def tri_insertion(T):
    for i in range(1, len(T)):
        cle, j = T[i], i - 1
        while j >= 0 and T[j] > cle:
            T[j + 1] = T[j]; j -= 1
        T[j + 1] = cle
    return T
print(tri_insertion([9, 4, 7, 1, 8]))`}]}
];
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const DEM=[
['Comprendre l’énoncé','Lire l’énoncé plusieurs fois ; souligner les verbes d’action (saisir, calculer, afficher) et les contraintes ; reformuler avec ses propres mots.','Un énoncé reformulé, la liste des contraintes (valeurs permises) et des cas particuliers.','Les verbes d’action deviendront les <i>traitements</i> ; les contraintes deviendront des <i>contrôles de saisie</i> (Répéter … Jusqu’à) et des <i>jeux d’essai</i>.',`Verbes : saisir n et les notes ; afficher moyenne, meilleure note, nombre d’admis.
Contraintes : 1 ≤ n ≤ 30 ; 0 ≤ note ≤ 20.
Cas limites : n = 1 ; toutes les notes égales ; aucune note ≥ 10.`],
['Analyser : résultats, données, traitements','Répondre à 3 questions : <b>Que doit-on obtenir ?</b> (résultats) ; <b>De quoi a-t-on besoin ?</b> (données) ; <b>Comment passer des données aux résultats ?</b> (traitements, formules).','Un tableau Résultats / Données / Traitements.','Résultats et données deviennent les <b>objets du TDO</b> ; les traitements deviennent le <b>corps des modules</b>.',`Résultats   : moy (Réel), maxi (Réel), nb (Entier)
Données     : n (Entier), T (tableau de n Réels)
Traitements : moy = somme(T) / n
              maxi = plus grand élément de T
              nb = nombre de T[i] ≥ 10`],
['Décomposer en modules et établir le TDO','Découper en sous-problèmes. Pour chaque module : son nom, sa nature (fonction ou procédure), ses paramètres formels et son résultat. Compléter le TDO (objets globaux, objets locaux).','La liste des modules avec leurs en-têtes + le TDO.','Les en-têtes donnent la première ligne de chaque algorithme et la ligne <code>def</code> en Python ; le TDO donne les variables à déclarer.',`Module            Nature    Paramètres   Résultat
Saisie(n)         Fonction  n : Entier   T : tableau
Moyenne(T, n)     Fonction  T, n         Réel
Maximum(T, n)     Fonction  T, n         Réel
NbAdmis(T, n)     Fonction  T, n         Entier
TDO global : n Entier ; T tableau de 30 Réels ; moy, maxi Réel ; nb Entier`],
['Écrire l’algorithme','Pour chaque module, choisir la bonne structure (Pour, Tant que, Si, Selon) et écrire le pseudo-code, puis le programme principal qui appelle les modules avec les paramètres effectifs.','Les algorithmes des modules + l’algorithme principal.','Chaque ligne de pseudo-code est traduite presque mot à mot en Python (Pour → for, Si → if, ← → =).',`Fonction Moyenne(T, n) : Réel
Début
  S ← 0
  Pour i de 0 à n-1 faire S ← S + T[i]
  Moyenne ← S / n
Fin
Algorithme Principal
Début
  Répéter Lire(n) Jusqu'à (n ≥ 1) ET (n ≤ 30)
  T ← Saisie(n)
  Écrire(Moyenne(T, n), Maximum(T, n), NbAdmis(T, n))
Fin`],
['Traduire en Python','Respecter les conventions : noms explicites, indentation, commentaires ; utiliser <code>math</code>, <code>numpy</code> ou <code>array</code> pour les calculs et les tableaux.','Un programme exécutable.','Le programme est exécuté avec les jeux d’essai prévus à l’étape 1.',`import numpy as np
def saisie(n):
    T = np.zeros(n)
    for i in range(n):
        T[i] = float(input(f"note {i+1} = "))
    return T
def moyenne(T, n):
    S = 0
    for i in range(n): S += T[i]
    return S / n
n = int(input("n = "))
T = saisie(n)
print(moyenne(T, n), T.max(), (T >= 10).sum())`],
['Tester et valider','Préparer des <b>jeux d’essai</b> avec les résultats attendus calculés à la main ; exécuter ; comparer ; corriger. Erreur de syntaxe → étape 5 ; résultat faux (logique) → étape 4 ; mauvais résultats attendus → étape 2.','Un programme validé (ou un retour motivé à l’étape fautive).','Le programme validé est conservé avec sa trace (jeux d’essai) et pourra être réutilisé comme module.',`Jeu d’essai       Attendu
n=3 : 8, 12, 16   moy = 12 ; maxi = 16 ; nb = 2
n=1 : 10          moy = 10 ; maxi = 10 ; nb = 1
n=2 : 5, 5        moy = 5  ; maxi = 5  ; nb = 0`]];
const DEMH=`<div class="card"><h3>Problème fil rouge</h3><p><i>« Saisir les notes de n élèves (1 ≤ n ≤ 30). Afficher la moyenne de la classe, la meilleure note et le nombre d’élèves ayant 10 ou plus. »</i></p></div><div class="card"><div class="flow">${DEM.map((d,i)=>`<span style="animation-delay:${i*.25}s">${i+1}. ${d[0]}</span>`).join('<i>➜</i>')}</div></div>`+DEM.map((d,i)=>`<div class="card"><h3>Étape ${i+1} : ${d[0]}</h3><div class="w"><b>Travail demandé :</b> ${d[1]}</div><div class="w"><b>Résultat obtenu :</b> ${d[2]}</div><div class="w n"><b>Utilisation à l’étape suivante :</b> ${d[3]}</div><h4>Exemple explicatif</h4><pre>${esc(d[4])}</pre></div>`).join('');
const EXQ={
dem:{html:DEMH,ex:['Un magasin accorde 10 % de remise si le montant des achats dépasse 100 DT. Appliquer la démarche pour afficher le net à payer.',`1) Énoncé : verbe « afficher » ; contrainte montant ≥ 0 ; cas limite : 100 exactement (pas de remise).
2) Analyse
   Résultat : net (Réel) — Données : montant (Réel)
   Traitement : si montant > 100 alors net = montant * 0.9 sinon net = montant
3) Modules / TDO : un seul algorithme ; TDO : montant, net : Réel
4) Algorithme
   Début
     Répéter Lire(montant) Jusqu'à montant ≥ 0
     Si montant > 100 alors net ← montant * 0.9
     Sinon net ← montant
     Fin Si
     Écrire(net)
   Fin
5) Python
   while True:
       montant = float(input("montant = "))
       if montant >= 0: break
   net = montant * 0.9 if montant > 100 else montant
   print(net)
6) Jeux d’essai : 50 → 50 ; 100 → 100 ; 200 → 180`,'Un entier n ≥ 2 est <i>parfait</i> s’il est égal à la somme de ses diviseurs propres (6 = 1+2+3). Appliquer la démarche.',`1) Énoncé : décider si n est parfait ; contrainte n ≥ 2.
2) Analyse
   Résultat : message « parfait » ou « non parfait »
   Donnée : n (Entier) ; Traitement : S = somme des d (1 ≤ d < n) tels que n MOD d = 0 ; parfait si S = n
3) Module : Fonction SommeDiv(n : Entier) : Entier
   TDO : n, d, S : Entier
4) Algorithme
   Fonction SommeDiv(n) : Entier
   Début
     S ← 0
     Pour d de 1 à n-1 faire
       Si n MOD d = 0 alors S ← S + d
     Fin Pour
     SommeDiv ← S
   Fin
   Principal : Si SommeDiv(n) = n alors Écrire("parfait") Sinon Écrire("non parfait")
5) Python
   def somme_div(n):
       return sum(d for d in range(1, n) if n % d == 0)
   n = int(input("n = "))
   print("parfait" if somme_div(n) == n else "non parfait")
6) Jeux d’essai : 6 → parfait ; 28 → parfait ; 12 → non (1+2+3+4+6=16) ; 2 → non`],q:[['Dans l’analyse, « ce que l’on veut afficher » correspond :',['aux données','aux résultats','aux traitements'],1],['Le TDO est établi à l’étape :',['de test','de décomposition en modules','de lecture de l’énoncé'],1],['Un programme qui s’exécute mais donne un résultat faux contient une erreur :',['de syntaxe','de logique','de frappe uniquement'],1]]},
sd:{ex:['Lire un entier n de 3 chiffres et afficher ses chiffres (centaines, dizaines, unités). Donner le TDO.',`TDO : n, c, d, u : Entier
Début
  Lire(n)
  c ← n DIV 100
  d ← (n MOD 100) DIV 10
  u ← n MOD 10
  Écrire(c, d, u)
Fin
# Python : c = n // 100 ; d = n % 100 // 10 ; u = n % 10`],q:[['Le résultat de 17 MOD 5 est :',['2','3','3,4'],0],['Le type de la constante Vrai est :',['Chaîne','Booléen','Entier'],1],['Quelle fonction donne le nombre de caractères d’une chaîne ?',['Pos','Long','Valeur'],1]]},
mod:{ex:['Écrire une fonction Max2(a, b) qui retourne le plus grand de deux entiers, puis l’appeler pour 8 et 13.',`Fonction Max2(a, b : Entier) : Entier
Début
  Si a > b alors Max2 ← a
  Sinon Max2 ← b
  Fin Si
Fin
# Python : def max2(a, b): return a if a > b else b
# Appel : max2(8, 13)  → 13`],q:[['Une variable déclarée dans un module est :',['globale','locale','constante'],1],['Les paramètres effectifs sont ceux :',['de la déclaration','de l’appel','du TDO global'],1]]},
ch:{ex:['Écrire une fonction Palindrome(ch) qui retourne Vrai si la chaîne se lit pareil dans les deux sens.',`Fonction Palindrome(ch : Chaîne) : Booléen
Début
  i ← 0 ; j ← Long(ch) - 1
  Tant que (i < j) ET (ch[i] = ch[j]) faire
    i ← i + 1 ; j ← j - 1
  Fin Tant que
  Palindrome ← (i ≥ j)
Fin
# Python : return ch == ch[::-1]`],q:[['Sous_chaine("informatique", 0, 4) retourne :',['"info"','"infor"','"form"'],0],['Long("algo") vaut :',['3','4','5'],1]]},
tab:{ex:['Calculer la moyenne des éléments d’un tableau T de n réels.',`TDO : T tableau de n Réels ; i : Entier ; S, moy : Réel
S ← 0
Pour i de 0 à n-1 faire S ← S + T[i]
moy ← S / n
Écrire(moy)
# numpy : moy = T.mean()`],q:[['Quel est l’indice du premier élément d’un tableau ?',['0','1','dépend du tableau'],0],['Un tableau de 5 éléments a pour dernier indice :',['5','4','6'],1]]},
sel:{ex:['Afficher le nom du jour (1 à 7) avec Selon.',`Selon j
  1 : Écrire("Lundi")
  2 : Écrire("Mardi")
  ...
  7 : Écrire("Dimanche")
  Sinon : Écrire("Numéro invalide")
Fin Selon
# Python : if/elif/else ou un tableau de noms : noms[j-1]`],q:[['Selon est adapté quand :',['il y a plusieurs choix pour une même variable','on répète un traitement','on trie un tableau'],0]]},
it:{anim:'it',ex:['Calculer la somme des chiffres d’un entier n (Tant que).',`TDO : n, S : Entier
S ← 0
Tant que n ≠ 0 faire
  S ← S + (n MOD 10)
  n ← n DIV 10
Fin Tant que
Écrire(S)
# Python : while n != 0: S += n % 10 ; n //= 10`,'Calculer n! avec Pour.',`f ← 1
Pour i de 2 à n faire f ← f * i
# math.factorial(n)`],q:[['Répéter … Jusqu’à s’exécute :',['au moins une fois','peut-être jamais','exactement n fois'],0],['Si la condition d’un Tant que ne change jamais :',['boucle infinie','une seule exécution','erreur de syntaxe'],0]]},
rech:{ex:['Compter le nombre d’occurrences d’une valeur x dans un tableau T de n éléments.',`nb ← 0
Pour i de 0 à n-1 faire
  Si T[i] = x alors nb ← nb + 1
Fin Pour
# numpy : (T == x).sum()`],q:[['La recherche dichotomique exige :',['un tableau trié','un tableau de réels','un tableau 2D'],0],['Recherche séquentielle : arrêt quand :',['x est trouvé ou fin du tableau','le tableau est trié','i = 0'],0]],
add:[{t:'Recherche dichotomique (tableau trié)',tdo:[['T','Tableau trié de n Entiers','Donnée'],['x','Entier','Valeur cherchée'],['g, d, m','Entier','Bornes et milieu'],['trouve','Booléen','Drapeau']],a:`Fonction Dicho(T, n, x) : Booléen
Début
  g ← 0 ; d ← n-1 ; trouve ← Faux
  Tant que (g ≤ d) ET (trouve = Faux) faire
    m ← (g + d) DIV 2
    Si T[m] = x alors trouve ← Vrai
    Sinon Si T[m] < x alors g ← m + 1
    Sinon d ← m - 1
    Fin Si
  Fin Tant que
  Dicho ← trouve
Fin`,p:`import numpy as np
T = np.sort(np.array([12, 5, 9, 31, 7]))
x, g, d, trouve = 9, 0, len(T) - 1, False
while g <= d and not trouve:
    m = (g + d) // 2
    if T[m] == x: trouve = True
    elif T[m] < x: g = m + 1
    else: d = m - 1
print(trouve)`},{t:'Recherche du maximum et du minimum',tdo:[['T','Tableau de n Entiers','Donnée'],['i','Entier','Indice'],['maxi, mini','Entier','Résultats']],a:`maxi ← T[0] ; mini ← T[0]
Pour i de 1 à n-1 faire
  Si T[i] > maxi alors maxi ← T[i]
  Sinon Si T[i] < mini alors mini ← T[i]
  Fin Si
Fin Pour`,p:`import numpy as np
T = np.array([12, 5, 9, 31, 7])
maxi = mini = T[0]
for i in range(1, len(T)):
    if T[i] > maxi: maxi = T[i]
    elif T[i] < mini: mini = T[i]
print(maxi, mini, T.max(), T.min())`}]},
tri:{ex:['Modifier le tri par sélection pour trier en ordre décroissant.',`Remplacer la recherche du minimum par celle du maximum :
  Si T[j] > T[pm] alors pm ← j
# Python : if T[j] > T[pm]: pm = j`],q:[['Après la 1ère passe du tri à bulles (croissant) :',['le plus grand est en dernière position','le plus petit est en 1ère position','le tableau est trié'],0],['Le tri par sélection repère à chaque tour :',['le minimum de la partie non triée','le maximum global','le milieu'],0]]}
};
const DT={cond:{q:'Un seul cas à traiter (il n’y a rien à faire dans l’autre cas) ?',y:{r:'Si … alors (forme réduite)'},n:{q:'Les cas dépendent-ils de valeurs précises d’une même variable (1, 2, 3 … ou "a", "b" …) ?',y:{r:'Selon (peu de valeurs) — ou Si généralisé si les cas sont des intervalles'},n:{q:'Y a-t-il exactement deux cas exclusifs ?',y:{r:'Si … alors … Sinon (forme complète)'},n:{r:'Si … Sinon Si … Sinon (forme généralisée)'}}}},
iter:{q:'Le nombre de répétitions est-il connu à l’avance (ou calculable avant la boucle) ?',y:{r:'Boucle Pour'},n:{q:'Le traitement doit-il s’exécuter au moins une fois (ex. saisie à contrôler) ?',y:{r:'Répéter … Jusqu’à (condition d’arrêt)'},n:{r:'Tant que … Faire (condition de continuité)'}}}};
function dt(id,path){const box=document.getElementById('dt-'+id);if(!box)return;let n=DT[id];for(const a of path)n=n[a];const j=x=>JSON.stringify(x).replace(/"/g,"'");
 box.innerHTML=n.r?`<div class="msg"><b>✔ Choix recommandé : ${n.r}</b></div><button class="btn s" onclick="dt('${id}',[])">↺ Recommencer</button>`:`<div class="msg">${n.q}</div><button class="btn" onclick="dt('${id}',${j(path.concat('y'))})">Oui</button> <button class="btn s" onclick="dt('${id}',${j(path.concat('n'))})">Non</button>`}
const SOLH=(t,en,L,cc)=>`<div class="card"><h3>${t}</h3><p>${en}</p>${L.map((x,i)=>`<h4>Solution ${i+1} : ${x[0]}</h4><div class="cols"><pre>${esc(x[1])}</pre><pre>${esc(x[2])}</pre></div>`).join('')}<div class="w n"><b>À retenir :</b> ${cc}</div></div>`;
const KEY=`<div class="card"><h3>💡 Idée clé : plusieurs solutions possibles</h3><p>Un même exercice admet <b>plusieurs solutions algorithmiques</b> correctes. Pour comparer deux solutions, on regarde : (1) l’<b>exactitude</b> (jeux d’essai, y compris les cas limites) ; (2) la <b>lisibilité</b> ; (3) l’<b>efficacité</b> (nombre de tests ou de répétitions) ; (4) la facilité à <b>généraliser</b>. Le bon choix n’est pas « la » solution du livre, mais une solution <b>correcte, claire et justifiée</b>.</p></div>`;
const CONDH=`<div class="card"><h3>Pourquoi des traitements conditionnels ?</h3><p>Un algorithme doit pouvoir <b>décider</b> : exécuter un traitement seulement si une condition est vraie, ou choisir entre plusieurs traitements selon les données. Sans condition, le programme ferait toujours la même chose, quelle que soit la donnée saisie.</p></div>
<div class="card"><h3>Les structures conditionnelles : quand et comment les utiliser</h3><table><tr><th>Structure</th><th>Quand l’utiliser ?</th><th>Comment ?</th><th>Python</th></tr>
<tr><td>Si … alors<br>(réduite)</td><td>un traitement à faire ou à ignorer</td><td>écrire la condition (expression booléenne) puis le traitement ; rien n’est fait si elle est fausse</td><td>if</td></tr>
<tr><td>Si … alors … Sinon<br>(complète)</td><td>deux cas qui s’excluent</td><td>un bloc pour Vrai, un bloc pour Faux ; un seul est exécuté</td><td>if / else</td></tr>
<tr><td>Si … Sinon Si … Sinon<br>(généralisée)</td><td>plus de deux cas décrits par des conditions ou des intervalles</td><td>ordonner les conditions ; la première vraie gagne ; Sinon = cas restants</td><td>if / elif / else</td></tr>
<tr><td>Selon</td><td>plusieurs cas selon la <b>valeur exacte</b> d’un même sélecteur (entier, caractère, chaîne)</td><td>lister les valeurs de chaque cas, puis Sinon pour les autres (voir le chapitre <a href="05-sel.html">Selon</a>)</td><td>if / elif ou match</td></tr></table></div>
<div class="card"><h3>Comment choisir la bonne structure ? (répondre par Oui / Non)</h3><div id="dt-cond"></div></div><div class="card"><h3>🎨 Infographie : quelle structure choisir ?</h3><a href="assets/img/choisir.jpg" target="_blank"><img class="inf" src="assets/img/choisir.jpg" alt="Infographie : quelle structure choisir ?"></a></div>`;
const ITERH=`<div class="card"><h3>Pourquoi des boucles ?</h3><p>Sans boucle, pour calculer 1 + 2 + … + 1000 il faudrait écrire 1000 instructions. Une <b>boucle</b> répète un traitement : l’algorithme reste <b>court</b>, <b>général</b> (n est une variable) et <b>lisible</b>. À chaque tour, les variables évoluent ; la boucle s’arrête quand une condition est atteinte.</p></div>
<div class="card"><h3>Quand et comment utiliser chaque boucle ?</h3><table><tr><th>Boucle</th><th>Quand ?</th><th>Comment l’utiliser ? (3 réflexes)</th><th>Piège à éviter</th></tr>
<tr><td><b>Pour</b></td><td>le nombre de répétitions est <b>connu</b> (ou calculable avant)</td><td>1) choisir le compteur, 2) donner valeur initiale et finale, 3) écrire le traitement (le compteur évolue seul)</td><td>modifier le compteur dans le corps ; en Python la borne de range est exclue</td></tr>
<tr><td><b>Tant que</b></td><td>nombre <b>inconnu</b> ; le traitement peut ne <b>jamais</b> s’exécuter</td><td>1) initialiser les variables de la condition, 2) écrire la condition de continuité, 3) modifier ces variables dans le corps</td><td>oublier la modification : boucle infinie</td></tr>
<tr><td><b>Répéter … Jusqu’à</b></td><td>nombre <b>inconnu</b> ; au moins <b>un</b> passage (ex. saisie à contrôler)</td><td>1) écrire le traitement, 2) écrire la condition d’<b>arrêt</b> après, 3) s’assurer qu’elle peut devenir vraie</td><td>confondre condition d’arrêt et de continuité (elles sont opposées)</td></tr></table></div>
<div class="card"><h3>Comment choisir la bonne boucle ? (répondre par Oui / Non)</h3><div id="dt-iter"></div>
<div class="w"><b>Équivalences utiles :</b> Tant que <i>cond</i> ⇔ Répéter … Jusqu’à <i>NON cond</i> (au détail près du premier passage) ; Pour i de 1 à n ⇔ i ← 1 ; Tant que i ≤ n … i ← i + 1.</div></div><div class="card"><h3>🎨 Infographie : quelle structure choisir ?</h3><a href="assets/img/choisir.jpg" target="_blank"><img class="inf" src="assets/img/choisir.jpg" alt="Infographie : quelle structure choisir ?"></a></div>`;
const SOLC=KEY+SOLH('Exemple 1 : le maximum de trois nombres a, b, c','Trois algorithmes différents, tous corrects.',[
['Si imbriqués',`Si a ≥ b alors
  Si a ≥ c alors m ← a
  Sinon m ← c
  Fin Si
Sinon
  Si b ≥ c alors m ← b
  Sinon m ← c
  Fin Si
Fin Si`,`if a >= b:
    m = a if a >= c else c
else:
    m = b if b >= c else c`],
['Conditions composées (ET)',`Si (a ≥ b) ET (a ≥ c) alors m ← a
Sinon Si (b ≥ a) ET (b ≥ c) alors m ← b
Sinon m ← c
Fin Si`,`if a >= b and a >= c:
    m = a
elif b >= a and b >= c:
    m = b
else:
    m = c`],
['Variable intermédiaire',`m ← a
Si b > m alors m ← b
Fin Si
Si c > m alors m ← c
Fin Si`,`m = a
if b > m: m = b
if c > m: m = c`]],'la 3ème solution est la plus simple et se généralise à n valeurs ; la 1ère fait moins de comparaisons mais est plus longue ; la 2ème est plus lisible que la 1ère.')+SOLH('Exemple 2 : la mention selon la note (0 à 20)','Deux structures conditionnelles différentes.',[
['Si généralisé (intervalles)',`Si note < 10 alors mention ← "Ajourné"
Sinon Si note < 12 alors mention ← "Passable"
Sinon Si note < 14 alors mention ← "Assez bien"
Sinon Si note < 16 alors mention ← "Bien"
Sinon mention ← "Très bien"
Fin Si`,`if note < 10: mention = "Ajourné"
elif note < 12: mention = "Passable"
elif note < 14: mention = "Assez bien"
elif note < 16: mention = "Bien"
else: mention = "Très bien"`],
['Selon sur note DIV 2',`Selon note DIV 2
  0, 1, 2, 3, 4 : mention ← "Ajourné"
  5 : mention ← "Passable"
  6 : mention ← "Assez bien"
  7 : mention ← "Bien"
  Sinon : mention ← "Très bien"
Fin Selon`,`k = note // 2
if k <= 4: mention = "Ajourné"
elif k == 5: mention = "Passable"
elif k == 6: mention = "Assez bien"
elif k == 7: mention = "Bien"
else: mention = "Très bien"`]],'Selon convient aux valeurs <b>exactes</b> ; pour des intervalles, le Si généralisé est plus naturel. Ici, le calcul <code>note DIV 2</code> ramène les intervalles à des valeurs exactes.');
const SOLI=KEY+SOLH('Exemple 1 : la somme S = 1 + 2 + … + n','Quatre solutions, dont une sans boucle.',[
['Pour (nombre de tours connu : n)',`S ← 0
Pour i de 1 à n faire
  S ← S + i
Fin Pour`,`S = 0
for i in range(1, n + 1):
    S += i`],
['Tant que',`S ← 0 ; i ← 1
Tant que i ≤ n faire
  S ← S + i
  i ← i + 1
Fin Tant que`,`S = 0; i = 1
while i <= n:
    S += i
    i += 1`],
['Répéter … Jusqu’à (valable seulement si n ≥ 1)',`S ← 0 ; i ← 1
Répéter
  S ← S + i
  i ← i + 1
Jusqu'à i > n`,`S = 0; i = 1
while True:
    S += i
    i += 1
    if i > n: break`],
['Sans boucle (formule)',`S ← n * (n + 1) DIV 2`,`S = n * (n + 1) // 2`]],'la boucle <b>Pour</b> est la plus adaptée (nombre de tours connu). Répéter donne un résultat faux pour n = 0 (il exécute toujours un tour). Parfois, une formule évite la boucle.')+SOLH('Exemple 2 : saisir une note valide (0 ≤ note ≤ 20)','Deux solutions avec des boucles à nombre inconnu.',[
['Répéter … Jusqu’à (condition d’arrêt)',`Répéter
  Lire(note)
Jusqu'à (note ≥ 0) ET (note ≤ 20)`,`while True:
    note = float(input("note = "))
    if 0 <= note <= 20: break`],
['Tant que (condition de continuité, lecture avant)',`Lire(note)
Tant que (note < 0) OU (note > 20) faire
  Lire(note)
Fin Tant que`,`note = float(input("note = "))
while note < 0 or note > 20:
    note = float(input("note = "))`]],'les deux sont corrects ; <b>Répéter</b> évite de lire deux fois, <b>Tant que</b> doit lire avant la boucle. Remarque : la condition de continuité est la <b>négation</b> de la condition d’arrêt (De Morgan : ET devient OU).');
C.push({id:'cond',t:'Traitements conditionnels',intro:'Un traitement conditionnel exécute des instructions <b>selon la valeur d’une condition</b> (expression booléenne). Formes : <b>réduite</b> (Si … Alors), <b>complète</b> (Si … Sinon), <b>généralisée</b> (Si … Sinon Si … Sinon) et <b>imbriquée</b>. Python : <code>if / elif / else</code> ; l’indentation délimite les blocs.',S:[
{t:'Forme réduite : valeur absolue',tdo:[['x','Réel','Donnée'],['y','Réel','Résultat = |x|']],a:`Début
  Lire(x)
  y ← x
  Si x < 0 alors
    y ← -x
  Fin Si
  Écrire(y)
Fin`,p:`x = float(input("x = "))
y = x
if x < 0:
    y = -x
print(y)`},
{t:'Forme complète : parité',tdo:[['n','Entier','Donnée']],a:`Si n MOD 2 = 0 alors
  Écrire("pair")
Sinon
  Écrire("impair")
Fin Si`,p:`n = int(input("n = "))
if n % 2 == 0:
    print("pair")
else:
    print("impair")`},
{t:'Forme généralisée : équation ax + b = 0',tdo:[['a, b','Réel','Coefficients'],['x','Réel','Solution']],a:`Si a ≠ 0 alors
  x ← -b / a
  Écrire("x = ", x)
Sinon Si b = 0 alors
  Écrire("infinité de solutions")
Sinon
  Écrire("aucune solution")
Fin Si`,p:`a = float(input("a = ")); b = float(input("b = "))
if a != 0:
    print("x =", -b / a)
elif b == 0:
    print("infinité de solutions")
else:
    print("aucune solution")`},
{t:'Condition composée : année bissextile',tdo:[['an','Entier','Donnée'],['biss','Booléen','Résultat']],a:`biss ← ((an MOD 4 = 0) ET (an MOD 100 ≠ 0)) OU (an MOD 400 = 0)
Si biss alors Écrire("bissextile")
Sinon Écrire("non bissextile")
Fin Si`,p:`an = int(input("année = "))
biss = (an % 4 == 0 and an % 100 != 0) or an % 400 == 0
print("bissextile" if biss else "non bissextile")`}],
html2:SOLC,html:CONDH+`<div class="card"><h3>Opérateurs logiques</h3><table><tr><th>A</th><th>B</th><th>A ET B</th><th>A OU B</th><th>NON A</th></tr><tr><td>Vrai</td><td>Vrai</td><td>Vrai</td><td>Vrai</td><td>Faux</td></tr><tr><td>Vrai</td><td>Faux</td><td>Faux</td><td>Vrai</td><td>Faux</td></tr><tr><td>Faux</td><td>Vrai</td><td>Faux</td><td>Vrai</td><td>Vrai</td></tr><tr><td>Faux</td><td>Faux</td><td>Faux</td><td>Faux</td><td>Vrai</td></tr></table></div>`,
q:[['Dans Si … Sinon, le bloc Sinon s’exécute quand :',['la condition est fausse','la condition est vraie','toujours'],0],['(5 > 3) ET (2 > 4) vaut :',['Vrai','Faux','Erreur'],1],['En Python, « sinon si » s’écrit :',['else if','elif','elseif'],1]]});
C.push({id:'iter',t:'Traitements itératifs',anim:'iter',intro:'Un traitement itératif <b>répète</b> des instructions. Le choix de la structure dépend de ce que l’on connaît à l’avance.',html2:SOLI,html:ITERH+`<div class="card"><table><tr><th>Structure</th><th>Quand l’utiliser ?</th><th>Condition</th><th>Passages</th><th>Python</th></tr><tr><td>Pour</td><td>nombre de répétitions connu</td><td>compteur de la valeur initiale à la valeur finale</td><td>exactement n</td><td>for i in range(...)</td></tr><tr><td>Tant que</td><td>nombre inconnu</td><td>condition de continuité (testée avant)</td><td>0 ou plus</td><td>while cond:</td></tr><tr><td>Répéter … Jusqu’à</td><td>nombre inconnu, au moins un passage</td><td>condition d’arrêt (testée après)</td><td>1 ou plus</td><td>while True: … if cond: break</td></tr></table></div>`,S:[
{t:'Pour : somme des entiers de 1 à n',tdo:[['n','Entier','Donnée'],['i','Entier','Compteur'],['S','Entier','Somme']],a:`S ← 0
Pour i de 1 à n faire
  S ← S + i
Fin Pour
Écrire(S)`,p:`n = int(input("n = "))
S = 0
for i in range(1, n + 1):
    S += i
print(S)`},
{t:'Tant que : nombre de chiffres d’un entier',tdo:[['n','Entier','Donnée (n > 0)'],['nb','Entier','Compteur de chiffres']],a:`nb ← 0
Tant que n ≠ 0 faire
  n ← n DIV 10
  nb ← nb + 1
Fin Tant que
Écrire(nb)`,p:`n = int(input("n = "))
nb = 0
while n != 0:
    n //= 10
    nb += 1
print(nb)`},
{t:'Répéter : plus petite puissance de 2 supérieure ou égale à a',tdo:[['a','Entier','Donnée (a ≥ 1)'],['p','Entier','Puissance de 2']],a:`p ← 1
Répéter
  p ← p * 2
Jusqu'à p ≥ a
Écrire(p)`,p:`a = int(input("a = "))
p = 1
while True:
    p *= 2
    if p >= a:
        break
print(p)`},
{t:'Pour imbriquées : triangle d’étoiles',tdo:[['n','Entier','Nombre de lignes'],['i, j','Entier','Compteurs']],a:`Pour i de 1 à n faire
  Pour j de 1 à i faire
    Écrire("*")
  Fin Pour
  Écrire("")      // retour à la ligne
Fin Pour`,p:`n = int(input("n = "))
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    print()`}],
q:[['Le nombre de répétitions est connu : on utilise de préférence :',['Pour','Tant que','Répéter'],0],['Quelle structure s’exécute au moins une fois ?',['Tant que','Répéter … Jusqu’à','Pour avec n = 0'],1],['En Python, range(1, 5) génère :',['1 2 3 4','1 2 3 4 5','0 1 2 3 4'],0]]});
let FCN=0;
const FW={s:90,p:130,i:130,c:110},FH={s:28,p:30,i:30,c:50};
function fcSvg(h,spec,id){let o=`<svg class="fc" viewBox="0 0 400 ${h}"><defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#888"/></marker></defs>`;
 (spec.e||[]).forEach(e=>{o+=`<polyline data-e="${e[0]}>${e[1]}" points="${e[2]}" marker-end="url(#${id})"/>`;if(e[3])o+=`<text class="el" x="${e[4]}" y="${e[5]}">${e[3]}</text>`});
 for(const k in spec.n){const [t,x,y,l,w]=spec.n[k],W=w||FW[t],H=FH[t];let sh;
  if(t==='s')sh=`<rect class="sh" x="${x-W/2}" y="${y-H/2}" width="${W}" height="${H}" rx="14"/>`;
  else if(t==='p')sh=`<rect class="sh" x="${x-W/2}" y="${y-H/2}" width="${W}" height="${H}" rx="3"/>`;
  else if(t==='i')sh=`<polygon class="sh" points="${x-W/2+10},${y-H/2} ${x+W/2},${y-H/2} ${x+W/2-10},${y+H/2} ${x-W/2},${y+H/2}"/>`;
  else sh=`<polygon class="sh" points="${x},${y-H/2} ${x+W/2},${y} ${x},${y+H/2} ${x-W/2},${y}"/>`;
  o+=`<g class="fn" data-n="${k}">${sh}<text x="${x}" y="${y}">${esc(l)}</text></g>`}
 return o+'</svg>'}
function fcMake(box,spec,gen,inputs){const id='mk'+(FCN++);let st=[],k=0,tm=null;
 box.innerHTML=`<div class="ctl" style="margin-top:0">${inputs.map(x=>`${x[0]} = <input type="text" value="${x[1]}" style="width:60px"> `).join('')}<button class="btn s">Lancer</button><button class="btn s">◀</button><button class="btn">▶ Lecture</button><button class="btn s">▶|</button></div>${fcSvg(spec.h,spec,id)}<div class="msg"></div><table class="vars"></table>`;
 const [go,pv,pl,nx]=box.querySelectorAll('button'),ins=box.querySelectorAll('input');
 const stop=()=>{clearInterval(tm);tm=null;pl.textContent='▶ Lecture'};
 const draw=()=>{const s=st[k];box.querySelectorAll('.fn').forEach(n=>n.setAttribute('class','fn'));box.querySelectorAll('polyline').forEach(e=>e.removeAttribute('class'));
  for(let i=0;i<=k;i++){box.querySelector(`[data-n="${st[i][0]}"]`).setAttribute('class','fn '+(i===k?'on':'vis'));
   if(i>0){const e=box.querySelector(`[data-e="${st[i-1][0]}>${st[i][0]}"]`);if(e)e.setAttribute('class','eon')}}
  box.querySelector('.msg').textContent=`Étape ${k+1}/${st.length} — ${s[1]}`;
  const v=s[2];box.querySelector('.vars').innerHTML='<tr>'+Object.keys(v).map(x=>`<th>${x}</th>`).join('')+'</tr><tr>'+Object.values(v).map(x=>`<td>${x}</td>`).join('')+'</tr>'};
 go.onclick=()=>{stop();st=gen([...ins].map(i=>Number(i.value)||0));k=0;draw()};
 nx.onclick=()=>{if(k<st.length-1){k++;draw()}};pv.onclick=()=>{if(k>0){k--;draw()}};
 pl.onclick=()=>{if(tm){stop();return}pl.textContent='⏸ Pause';if(k>=st.length-1)k=0;draw();tm=setInterval(()=>{if(k<st.length-1){k++;draw()}else stop()},900)};
 go.onclick()}
const SP1={h:295,n:{d:['s',110,22,'Début'],l:['i',110,75,'Lire(x)'],c:['c',110,140,'x < 0 ?'],p:['p',290,140,'x ← -x',100],e:['i',110,215,'Écrire(x)'],f:['s',110,270,'Fin']},
e:[['d','l','110,36 110,60'],['l','c','110,90 110,115'],['c','p','165,140 240,140','Oui',202,131],['p','e','290,155 290,215 175,215'],['c','e','110,165 110,200','Non',124,184],['e','f','110,230 110,256']]};
const SP2={h:295,n:{d:['s',190,22,'Début'],l:['i',190,70,'Lire(n)'],c:['c',190,130,'n MOD 2 = 0 ?',140],a:['i',90,205,'Écrire("pair")',120],b:['i',290,205,'Écrire("impair")',120],f:['s',190,270,'Fin']},
e:[['d','l','190,36 190,55'],['l','c','190,85 190,105'],['c','a','120,130 90,130 90,190','Oui',100,122],['c','b','260,130 290,130 290,190','Non',280,122],['a','f','90,220 90,270 145,270'],['b','f','290,220 290,270 235,270']]};
const SP3={h:355,n:{d:['s',215,20,'Début'],l:['i',215,62,'Lire(a, b)',110],c1:['c',215,125,'a ≠ 0 ?'],p:['p',65,125,'x ← -b / a',100],o1:['i',65,200,'Écrire(x)',100],c2:['c',215,205,'b = 0 ?'],o2:['i',215,280,'Écrire("infinité")',130],o3:['i',345,205,'Écrire("aucune")',100],f:['s',215,335,'Fin']},
e:[['d','l','215,34 215,47'],['l','c1','215,77 215,100'],['c1','p','160,125 115,125','Oui',137,116],['p','o1','65,140 65,185'],['c1','c2','215,150 215,180','Non',228,168],['c2','o2','215,230 215,265','Oui',228,250],['c2','o3','270,205 295,205','Non',283,196],['o1','f','65,215 65,335 170,335'],['o2','f','215,295 215,321'],['o3','f','345,220 345,335 260,335']]};
const SP4={h:300,n:{d:['s',200,20,'Début'],init:['p',200,65,'S ← 0 ; i ← 1'],c:['c',200,125,'i ≤ n ?'],b1:['p',330,125,'S ← S + i',100],b2:['p',330,185,'i ← i + 1',100],out:['i',200,215,'Écrire(S)',110],f:['s',200,275,'Fin']},
e:[['d','init','200,34 200,50'],['init','c','200,80 200,100'],['c','b1','255,125 280,125','Oui',268,116],['b1','b2','330,140 330,170'],['b2','c','280,185 240,185 240,132'],['c','out','200,150 200,200','Non',212,176],['out','f','200,230 200,261']]};
const LEG={h:62,n:{a:['s',50,30,'Début / Fin',84],b:['i',152,30,'Entrée / Sortie',104],c:['p',252,30,'Traitement',84],d:['c',350,30,'Test',84]},e:[]};
const G1=v=>{const x=v[0],neg=x<0,S=[['d','Début',{}],['l',`Lire(x) : x = ${x}`,{x}],['c',`x < 0 ? → ${x} < 0 est ${neg?'Vrai':'Faux (le traitement est sauté)'}`,{x,'x<0':neg}]];
 let y=x;if(neg){y=-x;S.push(['p',`Vrai → x ← -x = ${y}`,{x:y}])}S.push(['e',`Écrire(x) : affiche ${y}`,{x:y}],['f','Fin',{x:y}]);return S};
const G2=v=>{const n=Math.trunc(v[0]),r=((n%2)+2)%2,S=[['d','Début',{}],['l',`Lire(n) : n = ${n}`,{n}],['c',`n MOD 2 = ${r} → condition ${r===0?'Vraie':'Fausse'}`,{n,'n MOD 2':r}]];
 S.push(r===0?['a','Branche Alors : Écrire("pair")',{n}]:['b','Branche Sinon : Écrire("impair")',{n}],['f','Fin (une seule branche exécutée)',{n}]);return S};
const G3=v=>{const a=v[0],b=v[1],V={a,b},S=[['d','Début',{}],['l',`Lire(a, b) : a = ${a}, b = ${b}`,V],['c1',`a ≠ 0 ? → ${a!==0?'Vrai':'Faux'}`,V]];
 if(a!==0){const x=-b/a;S.push(['p',`x ← -b / a = ${+x.toFixed(4)}`,{...V,x:+x.toFixed(4)}],['o1',`Écrire(x) : affiche ${+x.toFixed(4)}`,V])}
 else{S.push(['c2',`Sinon Si b = 0 ? → ${b===0?'Vrai':'Faux'}`,V]);S.push(b===0?['o2','Écrire("infinité de solutions")',V]:['o3','Écrire("aucune solution")',V])}
 S.push(['f','Fin (un seul bloc exécuté)',V]);return S};
const G4=v=>{const n=Math.max(0,Math.min(8,Math.trunc(v[0]))),S=[['d','Début',{n}],['init','S ← 0 ; i ← 1',{n,S:0,i:1}]];let Sm=0,i=1;
 while(i<=n){S.push(['c',`i ≤ n ? → ${i} ≤ ${n} Vrai`,{n,i,S:Sm}]);Sm+=i;S.push(['b1',`S ← S + i = ${Sm}`,{n,i,S:Sm}]);i++;S.push(['b2',`i ← i + 1 = ${i}`,{n,i,S:Sm}])}
 S.push(['c',`i ≤ n ? → ${i} ≤ ${n} Faux → sortie de la boucle`,{n,i,S:Sm}],['out',`Écrire(S) : affiche ${Sm}`,{n,i,S:Sm}],['f','Fin',{n,i,S:Sm}]);return S};
const SP5={h:300,n:{d:['s',200,20,'Début'],init:['p',200,62,'nb ← 0'],c:['c',200,120,'n ≠ 0 ?'],b1:['p',330,120,'n ← n DIV 10',100],b2:['p',330,180,'nb ← nb + 1',100],out:['i',200,215,'Écrire(nb)',110],f:['s',200,275,'Fin']},
e:[['d','init','200,34 200,47'],['init','c','200,77 200,95'],['c','b1','255,120 280,120','Oui',268,111],['b1','b2','330,135 330,165'],['b2','c','280,180 240,180 240,127'],['c','out','200,145 200,200','Non',212,172],['out','f','200,230 200,261']]};
const SP6={h:325,n:{d:['s',200,20,'Début'],init:['p',200,62,'p ← 1'],b1:['p',200,120,'p ← p * 2'],c:['c',200,185,'p ≥ a ?'],out:['i',200,255,'Écrire(p)',110],f:['s',200,305,'Fin']},
e:[['d','init','200,34 200,47'],['init','b1','200,77 200,105'],['b1','c','200,135 200,160'],['c','b1','145,185 100,185 100,120 135,120','Non',118,177],['c','out','200,210 200,240','Oui',212,228],['out','f','200,270 200,291']]};
const G5=v=>{let n=Math.abs(Math.trunc(v[0]))%1000000000,nb=0;const S=[['d','Début',{n}],['init','nb ← 0',{n,nb}]];
 while(n!==0){S.push(['c',`n ≠ 0 ? → ${n} ≠ 0 Vrai`,{n,nb}]);n=Math.trunc(n/10);S.push(['b1',`n ← n DIV 10 = ${n}`,{n,nb}]);nb++;S.push(['b2',`nb ← nb + 1 = ${nb}`,{n,nb}])}
 S.push(['c','n ≠ 0 ? → n = 0 : Faux → sortie de la boucle',{n,nb}],['out',`Écrire(nb) : affiche ${nb}`,{n,nb}],['f','Fin',{n,nb}]);return S};
const G6=v=>{const a=Math.max(1,Math.min(1000000,Math.trunc(v[0]))),S=[['d','Début',{a}],['init','p ← 1',{a,p:1}]];let p=1;
 do{p*=2;S.push(['b1',`p ← p * 2 = ${p} (le corps s’exécute d’abord)`,{a,p}]);S.push(['c',`p ≥ a ? → ${p} ≥ ${a} ${p>=a?'Vrai → arrêt':'Faux → on répète'}`,{a,p}])}while(p<a);
 S.push(['out',`Écrire(p) : affiche ${p}`,{a,p}],['f','Fin',{a,p}]);return S};
const SYN=[
{t:'Si … Alors : forme réduite',a:`Si condition alors
  instructions
Fin Si`,p:`if condition:
    instructions`,st:['Évaluer la condition.','Si elle est <b>Vraie</b> : exécuter les instructions puis continuer.','Si elle est <b>Fausse</b> : passer directement à la suite.'],ex:'Exemple : valeur absolue de x. Choisis x puis lance : le chemin parcouru s’éclaire (essaie x positif et négatif).',sp:SP1,g:G1,inp:[['x','-5']]},
{t:'Si … Sinon : forme complète',a:`Si condition alors
  instructions1
Sinon
  instructions2
Fin Si`,p:`if condition:
    instructions1
else:
    instructions2`,st:['Évaluer la condition.','Vraie → exécuter <i>instructions1</i>.','Fausse → exécuter <i>instructions2</i>.','Dans tous les cas, une seule des deux branches s’exécute, puis on continue.'],ex:'Exemple : parité d’un entier n.',sp:SP2,g:G2,inp:[['n','7']]},
{t:'Si … Sinon Si … Sinon : forme généralisée',a:`Si condition1 alors
  instructions1
Sinon Si condition2 alors
  instructions2
Sinon
  instructions3
Fin Si`,p:`if condition1:
    instructions1
elif condition2:
    instructions2
else:
    instructions3`,st:['Tester <i>condition1</i> : si Vraie, exécuter <i>instructions1</i> et sortir.','Sinon tester <i>condition2</i> : si Vraie, exécuter <i>instructions2</i> et sortir.','Si aucune condition n’est vraie, exécuter <i>instructions3</i>.','Un seul bloc est exécuté.'],ex:'Exemple : équation ax + b = 0. Essaie (a, b) = (2, 6), (0, 0) et (0, 5).',sp:SP3,g:G3,inp:[['a','2'],['b','6']]},
{t:'Boucle Pour',a:`Pour compteur de vi à vf [pas p] faire
  instructions
Fin Pour`,p:`for compteur in range(vi, vf + 1):      # pas 1
    instructions
for compteur in range(vi, vf + 1, p):   # avec un pas p`,st:['Initialiser : <code>compteur ← vi</code>.','Tester <code>compteur ≤ vf</code> (pour un pas négatif : ≥).','Vrai → exécuter les instructions, <code>compteur ← compteur + pas</code>, retour à l’étape 2.','Faux → sortir de la boucle et continuer.','Nombre de répétitions = vf − vi + 1. En Python la borne de <code>range</code> est <b>exclue</b>, d’où vf + 1.'],ex:'Exemple : somme S = 1 + 2 + … + n (n ≤ 8). Observe la boucle repasser par le losange.',sp:SP4,g:G4,inp:[['n','4']]},
{t:'Boucle Tant que',a:`Tant que condition faire
  instructions
Fin Tant que`,p:`while condition:
    instructions`,st:['Évaluer la condition (de <b>continuité</b>).','Vraie → exécuter le corps, puis retour à l’étape 1.','Fausse → sortir de la boucle.','Le corps peut ne <b>jamais</b> s’exécuter ; la condition doit pouvoir devenir fausse (sinon boucle infinie).'],ex:'Exemple : nombre de chiffres de n. Essaie n = 345, puis n = 0.',sp:SP5,g:G5,inp:[['n','345']]},
{t:'Boucle Répéter … Jusqu’à',a:`Répéter
  instructions
Jusqu'à condition`,p:`while True:
    instructions
    if condition:
        break`,st:['Exécuter le corps (<b>au moins une fois</b>).','Évaluer la condition d’<b>arrêt</b>.','Vraie → sortir ; Fausse → retour à l’étape 1.'],ex:'Exemple : plus petite puissance de 2 supérieure ou égale à a. Essaie a = 20, puis a = 1.',sp:SP6,g:G6,inp:[['a','20']]}];
const SYNH=`<div class="card"><h3>Symboles de l’organigramme</h3>${fcSvg(LEG.h,LEG,'lg')}<p style="font-size:.85rem">Les flèches indiquent le sens d’exécution. Le <b>losange</b> pose une question : deux sorties, <b>Oui</b> et <b>Non</b>.</p></div>`+SYN.map((d,i)=>`<div class="card"><h3>${i+1}. ${d.t}</h3><div class="cols"><div><h4>Syntaxe algorithmique</h4><pre>${esc(d.a)}</pre></div><div><h4>Traduction Python</h4><pre>${esc(d.p)}</pre></div></div><h4>Étapes d’exécution</h4><ol>${d.st.map(x=>`<li>${x}</li>`).join('')}</ol><h4>Schéma (organigramme) et exemple animé</h4><p>${d.ex}</p><div id="syn${i}"></div></div>`).join('');
function synInit(){SYN.forEach((d,i)=>fcMake($('#syn'+i),d.sp,d.g,d.inp))}
C.push({id:'syn',t:'Si, Pour, Tant que, Répéter : organigrammes animés',intro:'Pour chaque structure : la <b>syntaxe</b> en algorithme, sa <b>traduction Python</b>, le <b>schéma</b> (organigramme), les <b>étapes d’exécution</b> et un <b>exemple animé</b> qui éclaire le chemin parcouru.',S:[],html:SYNH,
ex:['Dessiner l’organigramme de : Si x > 0 alors Écrire("positif") Sinon Écrire("négatif ou nul") Fin Si.',`Début (ovale) → Lire(x) (parallélogramme) → losange « x > 0 ? »
  Oui → Écrire("positif") ; Non → Écrire("négatif ou nul") (parallélogrammes)
  les deux sorties se rejoignent → Fin (ovale)
Python : print("positif" if x > 0 else "négatif ou nul")`,'Traduire en Python : Pour i de 10 à 2 (pas -2) faire Écrire(i) Fin Pour.',`for i in range(10, 1, -2):
    print(i)
Affiche : 10 8 6 4 2   (la borne 1 est exclue)`,'Faire la trace de : S ← 0 ; Pour i de 1 à 3 faire S ← S + i*i Fin Pour.',`i = 1 → S = 1
i = 2 → S = 1 + 4 = 5
i = 3 → S = 5 + 9 = 14
Python : S = sum(i*i for i in range(1, 4))  → 14`],
q:[['Quelle forme représente une condition dans un organigramme ?',['le losange','le rectangle','l’ovale'],0],['Pour i de 1 à 5 : combien de répétitions ?',['4','5','6'],1],['Dans la forme généralisée, combien de blocs s’exécutent ?',['un seul','tous','deux'],0],['range(1, 5) en Python s’arrête à :',['4','5','1'],0]]});
const GRIDH=`<div class="card"><h3>🎬 Animation : parcours d’un tableau à deux dimensions</h3><pre>Pour i de 0 à 2 faire
  Pour j de 0 à 3 faire
    S ← S + M[i][j]
  Fin Pour
Fin Pour</pre><div class="ctl" style="margin-top:0"><select id="gm"><option value="l">Ligne par ligne</option><option value="c">Colonne par colonne</option></select><button class="btn s" id="gg">Lancer</button><button class="btn" id="gp">▶ Lecture</button></div><div id="gbox"></div></div>`;
function gridInit(){const M=[[2,5,1,4],[7,3,8,6],[9,0,2,5]];let k=0,tm=null,st=[];
 const draw=()=>{const [ci,cj]=st[k];let S=0;const seen=new Set();for(let t=0;t<=k;t++){S+=M[st[t][0]][st[t][1]];seen.add(st[t][0]+','+st[t][1])}
  $('#gbox').innerHTML=`<table class="tr"><tr><th></th>${[0,1,2,3].map(j=>`<th>j=${j}</th>`).join('')}</tr>${M.map((r,i)=>`<tr><th>i=${i}</th>${r.map((v,j)=>`<td style="text-align:center;${i===ci&&j===cj?'background:var(--ac);color:#fff;font-weight:700':seen.has(i+','+j)?'background:rgba(47,91,234,.2)':''}">${v}</td>`).join('')}</tr>`).join('')}</table><div class="msg">Étape ${k+1}/12 — i = ${ci}, j = ${cj}, M[${ci}][${cj}] = ${M[ci][cj]} → S = ${S}</div>`};
 const go=()=>{clearInterval(tm);tm=null;st=[];if($('#gm').value==='l'){for(let i=0;i<3;i++)for(let j=0;j<4;j++)st.push([i,j])}else{for(let j=0;j<4;j++)for(let i=0;i<3;i++)st.push([i,j])}k=0;draw()};
 $('#gg').onclick=go;$('#gm').onchange=go;$('#gp').onclick=()=>{if(tm){clearInterval(tm);tm=null;return}if(k>=11)k=0;tm=setInterval(()=>{if(k<11){k++;draw()}else{clearInterval(tm);tm=null}},700)};go()}
const TRS=[
{t:'Pour : S ← 0 ; Pour i de 1 à 4 faire S ← S + i',cols:['i','S'],rows:[[1,1],[2,3],[3,6],[4,10]],hide:[[1,1],[2,1],[3,1],[3,0]]},
{t:'Tant que : nombre de chiffres de n = 2750',cols:['n (avant)','n (après)','nb'],rows:[[2750,275,1],[275,27,2],[27,2,3],[2,0,4]],hide:[[1,1],[1,2],[2,0],[2,2],[3,1],[3,2]]},
{t:'Euclide : a = 48, b = 18, r = a MOD b',cols:['a','b','r'],rows:[[48,18,12],[18,12,6],[12,6,0]],hide:[[1,0],[1,2],[2,0],[2,1],[2,2]]}];
function trInit(){$('#act-tr').innerHTML=TRS.map(T=>`<h4>${T.t}</h4><table class="tr"><tr>${T.cols.map(c=>`<th>${c}</th>`).join('')}</tr>${T.rows.map((r,i)=>`<tr>${r.map((v,j)=>T.hide.some(h=>h[0]===i&&h[1]===j)?`<td><input data-a="${v}" size="4"></td>`:`<td>${v}</td>`).join('')}</tr>`).join('')}</table><button class="btn s" onclick="trChk(this)">Vérifier</button> <button class="btn" onclick="trSol(this)">Voir la solution</button> <span></span>`).join('')}
function trChk(b){let ok=0,n=0;b.previousElementSibling.querySelectorAll('input').forEach(i=>{n++;const g=i.value.trim()===i.dataset.a;i.className=g?'c-ok':'c-ko';if(g)ok++});b.nextElementSibling.nextElementSibling.textContent=ok+'/'+n+(ok===n?' ✔ Bravo !':' — corrige les cases rouges')}
function trSol(b){b.previousElementSibling.previousElementSibling.querySelectorAll('input').forEach(i=>{i.value=i.dataset.a;i.className='c-ok'})}
const GAPS=[
{t:'Somme des entiers de 1 à n',c:'S ← {0}\nPour i de 1 à {1} faire\n  S ← {2}\nFin Pour',b:[[['0','1','n'],0],[['n','n - 1','10'],0],[['S + i','S + 1','i'],0]]},
{t:'Parité d’un entier',c:'Si n {0} 2 = 0 alors\n  Écrire("pair")\n{1}\n  Écrire("impair")\nFin Si',b:[[['MOD','DIV','+'],0],[['Sinon','Fin Si','Alors'],0]]},
{t:'Nombre de chiffres',c:'nb ← 0\nTant que n {0} 0 faire\n  n ← n {1} 10\n  nb ← nb + 1\nFin Tant que',b:[[['≠','=','<'],0],[['DIV','MOD','*'],0]]},
{t:'Saisie contrôlée d’une note',c:'Répéter\n  Lire(note)\n{0} (note ≥ 0) {1} (note ≤ 20)',b:[[["Jusqu'à",'Tant que','Si'],0],[['ET','OU','NON'],0]]}];
function gapInit(){$('#act-gap').innerHTML=GAPS.map(g=>`<h4>${g.t}</h4><pre class="gap">${esc(g.c).replace(/\{(\d)\}/g,(m,d)=>{const [o,a]=g.b[d];return `<select data-a="${esc(o[a])}"><option value="">?</option>${[...o].sort(()=>Math.random()-.5).map(x=>`<option>${esc(x)}</option>`).join('')}</select>`})}</pre><button class="btn s" onclick="gapChk(this)">Vérifier</button> <span></span>`).join('')}
function gapChk(b){let ok=0,n=0;b.previousElementSibling.querySelectorAll('select').forEach(x=>{n++;const g=x.value===x.dataset.a;x.className=g?'c-ok':'c-ko';if(g)ok++});b.nextElementSibling.textContent=ok+'/'+n+(ok===n?' ✔ Bravo !':' — corrige les cases rouges')}
let PR={s:[],k:0,sc:0,n:0};
const PDEF={som:[6,0],chif:[2750,0],pgcd:[48,18]};
function predInit(){$('#act-pred').innerHTML=`<p>Observe l’état des variables puis <b>prédis la prochaine valeur</b> avant de la voir.</p><div class="ctl" style="margin-top:0"><select id="pa" onchange="predDef()"><option value="som">Pour : somme de 1 à n</option><option value="chif">Tant que : nombre de chiffres</option><option value="pgcd">Euclide : PGCD(a, b)</option></select> a = <input id="pn" type="text" value="6" style="width:70px"> b = <input id="pn2" type="text" value="0" style="width:60px"><button class="btn s" onclick="predGo()">Commencer</button></div><div id="pbox"></div>`;predGo()}
function predDef(){const d=PDEF[$('#pa').value];$('#pn').value=d[0];$('#pn2').value=d[1];predGo()}
function predGo(){const a=Math.abs(Math.round(+$('#pn').value))||1,b=Math.abs(Math.round(+$('#pn2').value));PR={s:iterSteps($('#pa').value,a,b).slice(0,60),k:0,sc:0,n:0};predShow()}
function predShow(){const P=PR,s=P.s[P.k],nx=P.s[P.k+1],box=$('#pbox');
 const h=`<div class="msg">Étape ${P.k+1}/${P.s.length} — ${s.m}</div><table class="vars"><tr>${Object.keys(s.v).map(x=>`<th>${x}</th>`).join('')}</tr><tr>${Object.values(s.v).map(x=>`<td>${x}</td>`).join('')}</tr></table>`;
 if(!nx){box.innerHTML=h+`<div class="msg"><b>🏁 Fin ! Score : ${P.sc}/${P.n}</b></div>`;return}
 const key=Object.keys(nx.v).find(x=>typeof nx.v[x]==='number'&&String(nx.v[x])!==String(s.v[x]));
 if(!key){P.k++;return predShow()}
 P.key=key;P.ans=String(nx.v[key]);
 box.innerHTML=h+`<p>Quelle sera la valeur de <b>${key}</b> à l’étape suivante ? <input id="pin" size="6"> <button class="btn" onclick="predCheck()">Valider</button></p><div id="pfb"></div><small>Score : ${P.sc}/${P.n}</small>`}
function predCheck(){const P=PR,v=$('#pin').value.trim();P.n++;if(v===P.ans){P.sc++;P.k++;predShow()}else{$('#pfb').innerHTML=`<div class="msg">✘ Non. Étape suivante : ${P.s[P.k+1].m} → ${P.key} = <b>${P.ans}</b></div><button class="btn s" onclick="PR.k++;predShow()">Continuer</button>`}}
function actInit(){trInit();gapInit();predInit()}
const DEV=(t,d,L)=>`<div class="card"><h3>${t}</h3><p><i>Durée : ${d}</i></p>${L.map((e,i)=>`<h4>Exercice ${i+1} (${e[0]} points)</h4><p>${e[1]}</p><details><summary>Corrigé et barème</summary><pre>${esc(e[2])}</pre></details><p class="elv">🔒 Corrigé réservé au mode professeur.</p>`).join('')}<button class="btn s" onclick="window.print()">🖨️ Imprimer le sujet</button></div>`;
C.push({id:'synt',t:'Exercices de synthèse par niveau',intro:'Trois niveaux de difficulté pour consolider le cours : <b>⭐ niveau 1</b> (application directe), <b>⭐⭐ niveau 2</b> (raisonnement), <b>⭐⭐⭐ niveau 3</b> (problème avec plusieurs modules). Le barème est indicatif.',S:[],
ex:['<b>⭐ Niveau 1 (2 pts)</b> — Lire un entier n et afficher « positif », « négatif » ou « nul ».',`Si n > 0 alors Écrire("positif")
Sinon Si n < 0 alors Écrire("négatif")
Sinon Écrire("nul")
Fin Si
# Python : if n > 0: ... elif n < 0: ... else: ...
Tests : 5 → positif ; -2 → négatif ; 0 → nul`,'<b>⭐ Niveau 1 (2 pts)</b> — Afficher les multiples de 3 compris entre 1 et n.',`Pour i de 1 à n faire
  Si i MOD 3 = 0 alors Écrire(i)
Fin Pour
# Python : for i in range(1, n+1): if i % 3 == 0: print(i)
Autre solution (sans test) : for i in range(3, n+1, 3)
Test : n = 10 → 3 6 9`,'<b>⭐ Niveau 1 (3 pts)</b> — Écrire la fonction Carre(x), puis calculer la somme des carrés de 1 à n.',`Fonction Carre(x : Entier) : Entier
Début
  Carre ← x * x
Fin
S ← 0
Pour i de 1 à n faire S ← S + Carre(i)
Test : n = 3 → 1 + 4 + 9 = 14`,'<b>⭐⭐ Niveau 2 (4 pts)</b> — Lire n ≥ 2 et dire s’il est premier en comptant ses diviseurs.',`nb ← 0
Pour d de 1 à n faire
  Si n MOD d = 0 alors nb ← nb + 1
Fin Pour
Si nb = 2 alors Écrire("premier") Sinon Écrire("non premier")
Autre solution (Tant que, arrêt dès qu'un diviseur est trouvé) :
d ← 2
Tant que (d*d ≤ n) ET (n MOD d ≠ 0) faire d ← d + 1
premier ← (d*d > n)
Tests : 7 → premier (nb = 2) ; 12 → non (nb = 6)`,'<b>⭐⭐ Niveau 2 (4 pts)</b> — Tableau T de n entiers : afficher le nombre d’éléments pairs et la somme des éléments impairs.',`nbp ← 0 ; si ← 0
Pour i de 0 à n-1 faire
  Si T[i] MOD 2 = 0 alors nbp ← nbp + 1
  Sinon si ← si + T[i]
  Fin Si
Fin Pour
Test : [4, 7, 10, 3] → nbp = 2 ; si = 10`,'<b>⭐⭐ Niveau 2 (4 pts)</b> — Valider un mot de passe : au moins 8 caractères et au moins un chiffre.',`ok ← Faux
Pour i de 0 à Long(mdp)-1 faire
  Si Estnum(mdp[i]) alors ok ← Vrai
Fin Pour
valide ← (Long(mdp) ≥ 8) ET ok
# Python : valide = len(mdp) >= 8 and any(c.isdigit() for c in mdp)
Tests : "abc123" → Faux (trop court) ; "algo2026x" → Vrai`,'<b>⭐⭐⭐ Niveau 3 (6 pts)</b> — Écrire un programme modulaire : Trier(T, n) (insertion) et Dicho(T, n, x), puis trier T et rechercher x.',`Procédure Trier(T, n)            // tri par insertion (chapitre Tris)
Fonction Dicho(T, n, x) : Booléen // chapitre Recherches
Principal : Lire(n) ; remplir T ; Lire(x)
  Trier(T, n)
  Si Dicho(T, n, x) alors Écrire("présent") Sinon Écrire("absent")
La dichotomique exige un tableau trié : on trie d'abord.
Test : T = [9, 3, 7, 1], x = 7 → après tri [1, 3, 7, 9] → présent`,'<b>⭐⭐⭐ Niveau 3 (6 pts)</b> — Matrice carrée M de n×n : somme de la diagonale principale et de la diagonale secondaire.',`S1 ← 0 ; S2 ← 0
Pour i de 0 à n-1 faire
  S1 ← S1 + M[i][i]
  S2 ← S2 + M[i][n-1-i]
Fin Pour
# numpy : np.trace(M) et np.trace(M[:, ::-1])
Test : [[1,2,3],[4,5,6],[7,8,9]] → S1 = 15 ; S2 = 15`,'<b>⭐⭐⭐ Niveau 3 (6 pts)</b> — Convertir un entier n ≥ 0 en binaire (résultat : chaîne).',`Si n = 0 alors ch ← "0"
Sinon
  ch ← ""
  Tant que n > 0 faire
    ch ← Convch(n MOD 2) + ch
    n ← n DIV 2
  Fin Tant que
Fin Si
Trace pour n = 13 : "1" (n=6) → "01" (n=3) → "101" (n=1) → "1101" (n=0)
Python : ch = str(n % 2) + ch ; n //= 2`],
q:[['Un exercice admet plusieurs solutions : laquelle choisir ?',['toujours la plus courte','une solution correcte, lisible et testée','celle du voisin'],1],['Avant de rendre un algorithme, on doit :',['le tester avec des jeux d’essai','l’exécuter une seule fois','supprimer le TDO'],0]]});
C.push({id:'act',t:'Activités interactives',intro:'Entraîne-toi en jouant : complète des traces, remplis des algorithmes à trous et devine la prochaine étape d’une exécution.',S:[],html:`<div class="card"><h3>1. Trace à compléter</h3><p>Remplis les cases vides du tableau des valeurs, puis clique sur « Vérifier ».</p><div id="act-tr"></div></div><div class="card"><h3>2. Algorithmes à trous</h3><p>Choisis la bonne réponse dans chaque liste déroulante.</p><div id="act-gap"></div></div><div class="card"><h3>3. Devine la prochaine étape</h3><div id="act-pred"></div></div>`,
q:[['Dans une trace, on note :',['les valeurs des variables à chaque tour','le code Python','le TDO'],0],['Dans Tant que n ≠ 0, la boucle s’arrête quand :',['n = 0','n = 1','n > 0'],0]]});
C.push({id:'proj',t:'Mini-projets',intro:'Trois mini-projets pour appliquer la démarche (analyse → TDO → algorithme → Python → test). Les programmes sont <b>exécutables dans la page</b> (les saisies s’affichent dans des boîtes de dialogue).',S:[
{t:'Projet 1 : gestion des notes d’une classe',tdo:[['n','Entier','Nombre d’élèves'],['T','Tableau de n Réels','Notes'],['m','Réel','Moyenne'],['Saisie, Moyenne, Mention, Trier','Modules','Fonctions et procédure']],a:`Fonction Saisie(n) : Tableau de Réels   // contrôle 0 ≤ note ≤ 20
Fonction Moyenne(T, n) : Réel
Fonction Mention(m) : Chaîne            // Si généralisé
Procédure Trier(T, n)                   // tri par insertion
Principal :
  Lire(n) ; T ← Saisie(n)
  m ← Moyenne(T, n)
  Trier(T, n)
  Écrire(m, Mention(m), T[0], T[n-1])`,p:`import numpy as np
def saisie(n):
    T = np.zeros(n)
    for i in range(n):
        while True:
            T[i] = float(input(f"note {i+1} (0-20) : "))
            if 0 <= T[i] <= 20: break
    return T
def moyenne(T):
    return T.sum() / len(T)
def mention(m):
    if m < 10: return "Ajourné"
    elif m < 12: return "Passable"
    elif m < 14: return "Assez bien"
    elif m < 16: return "Bien"
    return "Très bien"
def trier(T):
    for i in range(1, len(T)):
        cle = T[i]; j = i - 1
        while j >= 0 and T[j] > cle:
            T[j + 1] = T[j]; j -= 1
        T[j + 1] = cle
n = int(input("nombre d'élèves : "))
T = saisie(n)
m = moyenne(T)
trier(T)
print("Moyenne :", round(m, 2), "-", mention(m))
print("Min :", T[0], " Max :", T[-1])`},
{t:'Projet 2 : le nombre mystère',tdo:[['secret','Entier','Nombre à deviner (1 à 100)'],['x','Entier','Proposition'],['essais','Entier','Compteur']],a:`secret ← Aléa(1, 100) ; essais ← 0
Répéter
  Lire(x) ; essais ← essais + 1
  Si x < secret alors Écrire("Plus grand")
  Sinon Si x > secret alors Écrire("Plus petit")
  Fin Si
Jusqu'à x = secret
Écrire("Bravo en ", essais, " essais")`,p:`import random
secret = random.randint(1, 100)
essais = 0
while True:
    x = int(input("Votre proposition (1-100) : "))
    essais += 1
    if x < secret:
        print("Plus grand")
    elif x > secret:
        print("Plus petit")
    else:
        print("Bravo en", essais, "essais")
        break`},
{t:'Projet 3 : chiffrement de César',tdo:[['ch','Chaîne','Message'],['k','Entier','Décalage'],['r','Chaîne','Message chiffré'],['Cesar','Fonction → Chaîne','Module']],a:`Fonction Cesar(ch, k) : Chaîne
Début
  r ← ""
  Pour i de 0 à Long(ch)-1 faire
    Si lettre minuscule alors
      r ← r + Chr((Ord(ch[i]) - Ord("a") + k) MOD 26 + Ord("a"))
    Sinon r ← r + ch[i]
    Fin Si
  Fin Pour
  Cesar ← r
Fin`,p:`def cesar(ch, k):
    r = ""
    for c in ch:
        if "a" <= c <= "z":
            r += chr((ord(c) - ord("a") + k) % 26 + ord("a"))
        else:
            r += c
    return r
print(cesar("bonjour", 3))   # erqmrxu`}],
ex:['Projet 1 : ajouter la recherche d’une note donnée dans le tableau trié.',`Après Trier(T, n), utiliser la fonction Dicho(T, n, x) du chapitre Recherches.
En Python : from bisect import bisect_left ; ou reprendre la boucle g/d/m.`,'Projet 2 : limiter le nombre d’essais à 7.',`Remplacer la condition d'arrêt par : Jusqu'à (x = secret) OU (essais = 7)
Puis, après la boucle : Si x ≠ secret alors Écrire("Perdu, le nombre était ", secret)
Python : while essais < 7 : ... (avec break si trouvé)`,'Projet 3 : écrire le déchiffrement.',`Déchiffrer avec le décalage k, c'est chiffrer avec le décalage -k (ou 26 - k).
cesar("erqmrxu", -3) → "bonjour"   (Python : le modulo % reste positif)`],
q:[['Quelle boucle convient pour deviner jusqu’à trouver ?',['Pour','Répéter … Jusqu’à','aucune'],1],['Dans le projet 1, quel module trie le tableau ?',['Saisie','Moyenne','Trier'],2]]});
C.push({id:'err',t:'Erreurs fréquentes en Python',intro:'Les messages d’erreur sont tes amis : ils indiquent le <b>type</b> de l’erreur et la <b>ligne</b>. Exécute chaque code erroné, lis le message, puis <b>corrige-le</b> dans la zone modifiable. Il existe aussi des erreurs de <b>logique</b> : aucun message, mais un résultat faux.',S:[
{t:'SyntaxError : deux-points oublié',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`SyntaxError: expected ':'
Après if, elif, else, for, while : mettre « : ».
Correction : if x > 3:`,p:`x = 5
if x > 3
    print("grand")`},
{t:'IndentationError : bloc non indenté',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`IndentationError: expected an indented block
Le corps d'une boucle ou d'un if doit être décalé de 4 espaces.`,p:`for i in range(3):
print(i)`},
{t:'NameError : nom inconnu',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`NameError: name 'N' is not defined
Python distingue majuscules et minuscules : n et N sont deux noms différents.
Correction : print(n)`,p:`n = 5
print(N)`},
{t:'TypeError : mélange de types',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`TypeError: can only concatenate str (not "int") to str
input() renvoie toujours une chaîne.
Correction : age = int(input("age = "))`,p:`age = input("age = ")
print(age + 1)`},
{t:'ValueError : conversion impossible',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`ValueError: invalid literal for int() with base 10: 'abc'
On ne peut pas convertir "abc" en entier.
Correction : tester d'abord avec ch.isdigit()`,p:`ch = "abc"
n = int(ch)
print(n)`},
{t:'IndexError : indice hors limites',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`IndexError: list index out of range
Un tableau de 3 éléments a pour indices 0, 1, 2.
Correction : T[2], ou for i in range(len(T))`,p:`T = [4, 9, 1]
print(T[3])`},
{t:'ZeroDivisionError : division par zéro',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`ZeroDivisionError: division by zero
Tester le diviseur : if b != 0:`,p:`a = 10
b = 0
print(a / b)`},
{t:'Erreur de logique : décalage d’une unité (range)',la:'Explication et correction',lp:'Code erroné (modifiable)',tdo:[],a:`Aucun message d'erreur, mais S = 10 au lieu de 15.
range(1, 5) s'arrête à 4 : la borne est exclue.
Correction : range(1, 6)`,p:`S = 0
for i in range(1, 5):
    S += i
print(S)    # on attend 1+2+3+4+5 = 15`},
{t:'Erreur de logique : = au lieu de ==',la:'Message et correction',lp:'Code erroné (modifiable)',tdo:[],a:`SyntaxError : « = » est l'affectation, « == » est la comparaison.
Correction : if x == 5:`,p:`x = 5
if x = 5:
    print("ok")`},
{t:'Boucle infinie : oubli de modifier la variable',la:'Explication et correction',lp:'Code erroné (NON exécutable ici)',tdo:[],norun:true,a:`La condition i <= 5 reste toujours vraie : le programme ne s'arrête jamais.
Correction : ajouter i += 1 dans le corps de la boucle.
(Dans l'éditeur, interrompre avec le bouton Stop.)`,p:`i = 1
while i <= 5:
    print(i)`}],
q:[['Le message IndexError signifie :',['indice hors des limites du tableau','nom inconnu','division par zéro'],0],['En Python, range(1, 6) donne :',['1 2 3 4 5','1 2 3 4 5 6','2 3 4 5 6'],0]]});
C.push({id:'eval',t:'Évaluations corrigées',intro:'Deux sujets prêts à l’emploi avec barème sur 20. Les <b>corrigés</b> ne s’affichent qu’en <b>mode professeur</b> (bouton en haut de la page) ; en mode élève, le bouton 🖨️ imprime le sujet seul.',S:[],html:
DEV('Devoir de contrôle','1 heure',[
[4,'Vrai ou faux (1 point chacun) : a) 17 MOD 5 = 3 ; b) range(1, 5) contient 5 ; c) Répéter … Jusqu’à s’exécute au moins une fois ; d) Selon sert surtout à tester des intervalles.','a) Faux (17 MOD 5 = 2)\nb) Faux (1, 2, 3, 4)\nc) Vrai\nd) Faux (valeurs exactes ; pour des intervalles : Si généralisé)\nBarème : 1 point par réponse.'],
[5,'Écrire un algorithme (avec TDO) qui lit trois entiers a, b, c et affiche le plus petit.','TDO : a, b, c, mini : Entier                      (1 pt)\nLire(a, b, c)                                      (1 pt)\nmini ← a\nSi b < mini alors mini ← b Fin Si                 (2 pts)\nSi c < mini alors mini ← c Fin Si\nÉcrire(mini)                                       (1 pt)\nTest : 8, 3, 5 → 3'],
[5,'Écrire l’algorithme qui lit n et affiche la somme des carrés des entiers de 1 à n. Faire la trace pour n = 3 et traduire en Python.','TDO : n, i, S : Entier                             (1 pt)\nS ← 0 ; Pour i de 1 à n faire S ← S + i*i          (2 pts)\nTrace : i=1 → S=1 ; i=2 → S=5 ; i=3 → S=14        (1 pt)\nPython : S = 0 ; for i in range(1, n+1): S += i*i (1 pt)'],
[6,'Soit un tableau T de n entiers. Écrire l’algorithme qui affiche le nombre d’éléments strictement supérieurs à la moyenne de T.','TDO : T tableau de n Entiers ; i, nb : Entier ; S, moy : Réel   (1 pt)\nS ← 0\nPour i de 0 à n-1 faire S ← S + T[i]                              (1,5 pt)\nmoy ← S / n                                                       (1 pt)\nnb ← 0\nPour i de 0 à n-1 faire Si T[i] > moy alors nb ← nb + 1          (2 pts)\nÉcrire(nb)                                                        (0,5 pt)\nTest : [2, 4, 9] → moy = 5 → nb = 1']])
+DEV('Devoir de synthèse','2 heures',[
[4,'Trace : a ← 48 ; b ← 18 ; Tant que b ≠ 0 faire r ← a MOD b ; a ← b ; b ← r. Compléter le tableau des valeurs. Que calcule cet algorithme ?','a  | b  | r\n48 | 18 | 12\n18 | 12 | 6\n12 | 6  | 0\n6  | 0  | (arrêt)\nIl calcule le PGCD de 48 et 18 : 6 (algorithme d’Euclide).\nBarème : tableau 3 pts, interprétation 1 pt.'],
[6,'Écrire la fonction Premier(n) : Booléen puis la procédure Afficher_premiers(m) qui affiche les nombres premiers de 2 à m, et le programme principal. Donner le TDO.','TDO : n, d : Entier ; m, i : Entier ; Premier fonction ; Afficher_premiers procédure   (1,5 pt)\nFonction Premier(n) : Booléen\n  d ← 2\n  Tant que (d*d ≤ n) ET (n MOD d ≠ 0) faire d ← d + 1                              (2 pts)\n  Premier ← (d*d > n)\nProcédure Afficher_premiers(m)\n  Pour i de 2 à m faire Si Premier(i) alors Écrire(i)                              (1,5 pt)\nPrincipal : Lire(m) ; Afficher_premiers(m)                                         (1 pt)\nTest : m = 10 → 2 3 5 7'],
[6,'a) Écrire la fonction Max_pos(T, n) qui retourne l’indice du maximum. b) Trier T = [7, 3, 9, 1] par sélection (donner chaque étape). c) Rechercher 9 par dichotomie dans le tableau trié.','a) pm ← 0 ; Pour i de 1 à n-1 faire Si T[i] > T[pm] alors pm ← i ; Max_pos ← pm          (2 pts)\nb) i=0 : min=1 (indice 3) → [1, 3, 9, 7] ; i=1 : 3 en place ; i=2 : min=7 → [1, 3, 7, 9]   (2 pts)\nc) g=0, d=3 : m=1 (3 < 9) → g=2 ; m=2 (7 < 9) → g=3 ; m=3 (9) → trouvé à l’indice 3        (2 pts)'],
[4,'a) Fonction Compter(ch, c) : nombre d’occurrences du caractère c dans ch. b) Fonction Palindrome(ch) : Booléen. Tests : Compter("banane","a") et Palindrome("radar").','a) nb ← 0 ; Pour i de 0 à Long(ch)-1 faire Si ch[i] = c alors nb ← nb + 1 ; Compter ← nb   (2 pts)\n   Compter("banane","a") = 2\nb) Palindrome ← (ch = Inverser(ch))   ou   comparer ch[i] et ch[Long-1-i]                    (2 pts)\n   Palindrome("radar") = Vrai'] ]) ,
q:[['Dans l’évaluation, le corrigé est visible en :',['mode professeur','mode élève','aucun mode'],0]]});
C.push({id:'ser1',t:"Série n°1 : bases, conditions et Selon",intro:"Types, affectation, Si (réduit, complet, généralisé) et Selon. Pour chaque exercice : analyse, TDO, algorithme, programme Python et jeu d’essai.",S:[],ex:["Lire une température en degrés Celsius et afficher son équivalent en degrés Fahrenheit (F = C × 9 / 5 + 32).", "TDO : c, f : Réel\n\nAlgorithme :\nDébut\n  Lire(c)\n  f ← c * 9 / 5 + 32\n  Écrire(f)\nFin\n\nPython :\nc = float(input(\"C = \"))\nf = c * 9 / 5 + 32\nprint(f)\n\nJeu d'essai : C = 100 → 212 ; C = 0 → 32", "Un article coûte ht dinars hors taxe. La TVA est de 19 %. Si le prix TTC dépasse 200 DT, on accorde 10 % de remise sur le TTC. Afficher le prix à payer.", "TDO : ht, ttc, net : Réel\n\nAlgorithme :\nDébut\n  Lire(ht)\n  ttc ← ht * 1.19\n  Si ttc > 200 alors\n    net ← ttc * 0.9\n  Sinon\n    net ← ttc\n  Fin Si\n  Écrire(net)\nFin\n\nPython :\nht = float(input(\"HT = \"))\nttc = ht * 1.19\nnet = ttc * 0.9 if ttc > 200 else ttc\nprint(round(net, 2))\n\nJeu d'essai : HT = 100 → 119 ; HT = 200 → TTC = 238, net = 214,2", "Lire deux entiers a et b et dire si leur produit est positif, négatif ou nul, sans calculer le produit.", "TDO : a, b : Entier\n\nAlgorithme :\nDébut\n  Lire(a, b)\n  Si (a = 0) OU (b = 0) alors\n    Écrire(\"nul\")\n  Sinon Si ((a > 0) ET (b > 0)) OU ((a < 0) ET (b < 0)) alors\n    Écrire(\"positif\")\n  Sinon\n    Écrire(\"négatif\")\n  Fin Si\nFin\n\nPython :\na = int(input(\"a = \"))\nb = int(input(\"b = \"))\nif a == 0 or b == 0:\n    print(\"nul\")\nelif (a > 0 and b > 0) or (a < 0 and b < 0):\n    print(\"positif\")\nelse:\n    print(\"négatif\")\n\nJeu d'essai : (-3, 5) → négatif ; (-2, -4) → positif ; (0, 7) → nul", "Lire un numéro de jour j (1 = lundi … 7 = dimanche) et afficher « jour de travail » (lundi à vendredi), « week-end » (samedi, dimanche) ou « invalide », avec Selon.", "TDO : j : Entier\n\nAlgorithme :\nDébut\n  Lire(j)\n  Selon j\n    1, 2, 3, 4, 5 : Écrire(\"jour de travail\")\n    6, 7 : Écrire(\"week-end\")\n    Sinon : Écrire(\"invalide\")\n  Fin Selon\nFin\n\nPython :\nj = int(input(\"j = \"))\nif j in (1, 2, 3, 4, 5):\n    print(\"jour de travail\")\nelif j in (6, 7):\n    print(\"week-end\")\nelse:\n    print(\"invalide\")\n\nJeu d'essai : 3 → jour de travail ; 7 → week-end ; 9 → invalide", "Lire trois entiers a, b, c et les afficher dans l’ordre croissant en utilisant des échanges (sans tableau).", "TDO : a, b, c, aux : Entier\n\nAlgorithme :\nDébut\n  Lire(a, b, c)\n  Si a > b alors aux ← a ; a ← b ; b ← aux Fin Si\n  Si b > c alors aux ← b ; b ← c ; c ← aux Fin Si\n  Si a > b alors aux ← a ; a ← b ; b ← aux Fin Si\n  Écrire(a, b, c)\nFin\n\nPython :\na = int(input(\"a = \"))\nb = int(input(\"b = \"))\nc = int(input(\"c = \"))\nif a > b: a, b = b, a\nif b > c: b, c = c, b\nif a > b: a, b = b, a\nprint(a, b, c)\n\nJeu d'essai : (5, 2, 9) → 2 5 9 ; (9, 5, 2) → 2 5 9", "Lire les trois côtés a, b, c d’un triangle et dire s’il est rectangle (théorème de Pythagore).", "TDO : a, b, c : Entier\n\nAlgorithme :\nDébut\n  Lire(a, b, c)\n  Si (a*a = b*b + c*c) OU (b*b = a*a + c*c) OU (c*c = a*a + b*b) alors\n    Écrire(\"rectangle\")\n  Sinon\n    Écrire(\"non rectangle\")\n  Fin Si\nFin\n\nPython :\na = int(input(\"a = \"))\nb = int(input(\"b = \"))\nc = int(input(\"c = \"))\nif a*a == b*b + c*c or b*b == a*a + c*c or c*c == a*a + b*b:\n    print(\"rectangle\")\nelse:\n    print(\"non rectangle\")\n\nJeu d'essai : (3, 4, 5) → rectangle ; (2, 3, 4) → non rectangle"]});
C.push({id:'ser2',t:"Série n°2 : boucles et chaînes",intro:"Pour, Tant que, Répéter et parcours de chaînes : compteur, accumulateur, drapeau.",S:[],ex:["Calculer la somme des multiples de 5 compris entre 1 et n.", "TDO : n, i, S : Entier\n\nAlgorithme :\nDébut\n  Lire(n)\n  S ← 0\n  Pour i de 5 à n (pas 5) faire\n    S ← S + i\n  Fin Pour\n  Écrire(S)\nFin\n\nPython :\nn = int(input(\"n = \"))\nS = 0\nfor i in range(5, n + 1, 5):\n    S += i\nprint(S)\n\nJeu d'essai : n = 20 → 5 + 10 + 15 + 20 = 50 ; n = 4 → 0", "Soit la suite u₀ = 1 et u(k+1) = 2 × u(k) + 1. Calculer u(n).", "TDO : n, k, u : Entier\n\nAlgorithme :\nDébut\n  Lire(n)\n  u ← 1\n  Pour k de 1 à n faire\n    u ← 2 * u + 1\n  Fin Pour\n  Écrire(u)\nFin\n\nPython :\nn = int(input(\"n = \"))\nu = 1\nfor k in range(1, n + 1):\n    u = 2 * u + 1\nprint(u)\n\nJeu d'essai : suite : 1, 3, 7, 15, 31 → n = 4 donne 31", "Afficher le plus grand chiffre d’un entier n > 0 (boucle Tant que).", "TDO : n, c, m : Entier\n\nAlgorithme :\nDébut\n  Lire(n)\n  m ← 0\n  Tant que n ≠ 0 faire\n    c ← n MOD 10\n    Si c > m alors m ← c Fin Si\n    n ← n DIV 10\n  Fin Tant que\n  Écrire(m)\nFin\n\nPython :\nn = int(input(\"n = \"))\nm = 0\nwhile n != 0:\n    c = n % 10\n    if c > m:\n        m = c\n    n //= 10\nprint(m)\n\nJeu d'essai : 7352 → 7 ; 1000 → 1", "Inverser les chiffres d’un entier n > 0 (1234 devient 4321).", "TDO : n, r : Entier\n\nAlgorithme :\nDébut\n  Lire(n)\n  r ← 0\n  Tant que n > 0 faire\n    r ← r * 10 + n MOD 10\n    n ← n DIV 10\n  Fin Tant que\n  Écrire(r)\nFin\n\nPython :\nn = int(input(\"n = \"))\nr = 0\nwhile n > 0:\n    r = r * 10 + n % 10\n    n //= 10\nprint(r)\n\nJeu d'essai : 1234 → 4321 ; 500 → 5 (zéros de fin perdus)", "Compter le nombre de lettres majuscules d’une chaîne.", "TDO : ch : Chaîne ; i, nb : Entier\n\nAlgorithme :\nDébut\n  Lire(ch)\n  nb ← 0\n  Pour i de 0 à Long(ch)-1 faire\n    Si (ch[i] ≥ \"A\") ET (ch[i] ≤ \"Z\") alors nb ← nb + 1 Fin Si\n  Fin Pour\n  Écrire(nb)\nFin\n\nPython :\nch = input(\"ch = \")\nnb = 0\nfor i in range(len(ch)):\n    if \"A\" <= ch[i] <= \"Z\":\n        nb += 1\nprint(nb)\n\nJeu d'essai : \"Bonjour Tunisie\" → 2 ; \"algo\" → 0", "Remplacer chaque espace d’une chaîne par un tiret.", "TDO : ch, r : Chaîne ; i : Entier\n\nAlgorithme :\nDébut\n  Lire(ch)\n  r ← \"\"\n  Pour i de 0 à Long(ch)-1 faire\n    Si ch[i] = \" \" alors r ← r + \"-\"\n    Sinon r ← r + ch[i]\n    Fin Si\n  Fin Pour\n  Écrire(r)\nFin\n\nPython :\nch = input(\"ch = \")\nr = \"\"\nfor i in range(len(ch)):\n    if ch[i] == \" \":\n        r = r + \"-\"\n    else:\n        r = r + ch[i]\nprint(r)\n\nJeu d'essai : \"Le soleil brille\" → \"Le-soleil-brille\""]});
C.push({id:'ser3',t:"Série n°3 : tableaux, recherches et modules",intro:"Tableaux 1D et 2D, parcours, fusion, modules (fonctions et procédures) avec paramètres.",S:[],ex:["Écrire la fonction Compter(T, n, x) qui retourne le nombre d’occurrences de x dans le tableau T de n éléments.", "TDO : T : Tableau de n Entiers ; n, x : Entier (paramètres) ; i, nb : Entier (locaux)\n\nAlgorithme :\nFonction Compter(T, n, x : Entier) : Entier\nDébut\n  nb ← 0\n  Pour i de 0 à n-1 faire\n    Si T[i] = x alors nb ← nb + 1 Fin Si\n  Fin Pour\n  Compter ← nb\nFin\n\nPython :\ndef compter(T, n, x):\n    nb = 0\n    for i in range(n):\n        if T[i] == x:\n            nb += 1\n    return nb\n\nprint(compter([3, 7, 3, 1, 3], 5, 3))\n\nJeu d'essai : [3, 7, 3, 1, 3], x = 3 → 3", "Décaler d’une position vers la droite les éléments d’un tableau T de n éléments : le dernier passe en première position.", "TDO : T : Tableau de n Entiers ; i, dernier : Entier\n\nAlgorithme :\ndernier ← T[n-1]\nPour i de n-1 à 1 (pas -1) faire\n  T[i] ← T[i-1]\nFin Pour\nT[0] ← dernier\n\nPython :\nT = [1, 2, 3, 4]\nn = len(T)\ndernier = T[n - 1]\nfor i in range(n - 1, 0, -1):\n    T[i] = T[i - 1]\nT[0] = dernier\nprint(T)\n\nJeu d'essai : [1, 2, 3, 4] → [4, 1, 2, 3]", "Fusionner deux tableaux triés A (na éléments) et B (nb éléments) en un tableau trié C.", "TDO : A, B, C : Tableaux d’Entiers ; na, nb, i, j, k : Entier\n\nAlgorithme :\ni ← 0 ; j ← 0 ; k ← 0\nTant que (i < na) ET (j < nb) faire\n  Si A[i] ≤ B[j] alors\n    C[k] ← A[i] ; i ← i + 1\n  Sinon\n    C[k] ← B[j] ; j ← j + 1\n  Fin Si\n  k ← k + 1\nFin Tant que\nTant que i < na faire C[k] ← A[i] ; i ← i + 1 ; k ← k + 1 Fin Tant que\nTant que j < nb faire C[k] ← B[j] ; j ← j + 1 ; k ← k + 1 Fin Tant que\n\nPython :\nA = [1, 4, 7]\nB = [2, 3, 9]\nna, nb = len(A), len(B)\nC = [0] * (na + nb)\ni = j = k = 0\nwhile i < na and j < nb:\n    if A[i] <= B[j]:\n        C[k] = A[i]; i += 1\n    else:\n        C[k] = B[j]; j += 1\n    k += 1\nwhile i < na:\n    C[k] = A[i]; i += 1; k += 1\nwhile j < nb:\n    C[k] = B[j]; j += 1; k += 1\nprint(C)\n\nJeu d'essai : A = [1, 4, 7], B = [2, 3, 9] → [1, 2, 3, 4, 7, 9]", "Afficher le deuxième plus grand élément d’un tableau T de n entiers positifs, sans trier le tableau (il existe au moins deux valeurs différentes).", "TDO : T : Tableau de n Entiers ; i, max1, max2 : Entier\n\nAlgorithme :\nmax1 ← T[0]\nPour i de 1 à n-1 faire\n  Si T[i] > max1 alors max1 ← T[i] Fin Si\nFin Pour\nmax2 ← -1\nPour i de 0 à n-1 faire\n  Si (T[i] < max1) ET (T[i] > max2) alors max2 ← T[i] Fin Si\nFin Pour\nÉcrire(max2)\n\nPython :\nT = [4, 9, 1, 7]\nn = len(T)\nmax1 = T[0]\nfor i in range(1, n):\n    if T[i] > max1:\n        max1 = T[i]\nmax2 = -1\nfor i in range(n):\n    if T[i] < max1 and T[i] > max2:\n        max2 = T[i]\nprint(max2)\n\nJeu d'essai : [4, 9, 1, 7] → 7 ; [5, 5, 2] → 2", "Calculer la transposée d’une matrice M de 2 lignes et 3 colonnes (numpy).", "TDO : M : Matrice 2×3 d’Entiers ; Tr : Matrice 3×2 d’Entiers ; i, j : Entier\n\nAlgorithme :\nPour i de 0 à 1 faire\n  Pour j de 0 à 2 faire\n    Tr[j][i] ← M[i][j]\n  Fin Pour\nFin Pour\n\nPython :\nimport numpy as np\nM = np.array([[1, 2, 3], [4, 5, 6]])\nTr = np.zeros((3, 2), dtype=int)\nfor i in range(2):\n    for j in range(3):\n        Tr[j][i] = M[i][j]\nprint(Tr.tolist())\n\nJeu d'essai : [[1,2,3],[4,5,6]] → [[1,4],[2,5],[3,6]]  (numpy : M.T)", "Écrire les fonctions Maximum(T, n), Minimum(T, n) et Etendue(T, n) = maximum − minimum, puis afficher l’étendue de T = [4, 9, 1, 7].", "TDO : T : Tableau de n Entiers ; n, i, m : Entier (locaux) ; Maximum, Minimum, Etendue : Fonctions → Entier\n\nAlgorithme :\nFonction Maximum(T, n) : Entier\n  m ← T[0]\n  Pour i de 1 à n-1 faire Si T[i] > m alors m ← T[i]\n  Maximum ← m\nFonction Minimum(T, n) : Entier\n  m ← T[0]\n  Pour i de 1 à n-1 faire Si T[i] < m alors m ← T[i]\n  Minimum ← m\nFonction Etendue(T, n) : Entier\n  Etendue ← Maximum(T, n) - Minimum(T, n)\n\nPython :\ndef maximum(T, n):\n    m = T[0]\n    for i in range(1, n):\n        if T[i] > m: m = T[i]\n    return m\n\ndef minimum(T, n):\n    m = T[0]\n    for i in range(1, n):\n        if T[i] < m: m = T[i]\n    return m\n\ndef etendue(T, n):\n    return maximum(T, n) - minimum(T, n)\n\nprint(etendue([4, 9, 1, 7], 4))\n\nJeu d'essai : [4, 9, 1, 7] → 9 − 1 = 8"]});
C.push({id:'lib',t:'Bibliothèque de procédures et fonctions',intro:"32 modules prêts à l’emploi, classés par catégorie : pour chacun, le rôle, le TDO, l’algorithme, la traduction Python et un exemple d’appel.",S:[{"t": "[Numérique] Fonction Carre", "tdo": [["x", "Entier", "Paramètre formel (donnée)"], ["Carre", "Fonction → Entier", "Module"]], "a": "Fonction Carre(x : Entier) : Entier\nDébut\n  Carre ← x * x\nFin", "p": "def carre(x):\n    return x * x\n\nprint(carre(7))   # 49"}, {"t": "[Numérique] Fonction ValAbs", "tdo": [["x", "Réel", "Paramètre formel"], ["ValAbs", "Fonction → Réel", "Module"]], "a": "Fonction ValAbs(x : Réel) : Réel\nDébut\n  Si x < 0 alors\n    ValAbs ← -x\n  Sinon\n    ValAbs ← x\n  Fin Si\nFin", "p": "def val_abs(x):\n    if x < 0:\n        return -x\n    return x\n\nprint(val_abs(-4.5))   # 4.5"}, {"t": "[Numérique] Fonction Max2", "tdo": [["a, b", "Entier", "Paramètres formels"], ["Max2", "Fonction → Entier", "Module"]], "a": "Fonction Max2(a, b : Entier) : Entier\nDébut\n  Si a > b alors\n    Max2 ← a\n  Sinon\n    Max2 ← b\n  Fin Si\nFin", "p": "def max2(a, b):\n    if a > b:\n        return a\n    return b\n\nprint(max2(8, 13))   # 13"}, {"t": "[Numérique] Fonction EstPair", "tdo": [["n", "Entier", "Paramètre formel"], ["EstPair", "Fonction → Booléen", "Module"]], "a": "Fonction EstPair(n : Entier) : Booléen\nDébut\n  EstPair ← (n MOD 2 = 0)\nFin", "p": "def est_pair(n):\n    return n % 2 == 0\n\nprint(est_pair(10), est_pair(7))   # True False"}, {"t": "[Numérique] Fonction Factorielle", "tdo": [["n", "Entier", "Paramètre formel"], ["f", "Entier", "Local : produit"], ["i", "Entier", "Local : compteur"], ["Factorielle", "Fonction → Entier", "Module"]], "a": "Fonction Factorielle(n : Entier) : Entier\nDébut\n  f ← 1\n  Pour i de 2 à n faire\n    f ← f * i\n  Fin Pour\n  Factorielle ← f\nFin", "p": "def factorielle(n):\n    f = 1\n    for i in range(2, n + 1):\n        f = f * i\n    return f\n\nprint(factorielle(5))   # 120"}, {"t": "[Numérique] Fonction Puissance", "tdo": [["a, n", "Entier", "Paramètres formels (n ≥ 0)"], ["r, i", "Entier", "Locaux"], ["Puissance", "Fonction → Entier", "Module"]], "a": "Fonction Puissance(a, n : Entier) : Entier\nDébut\n  r ← 1\n  Pour i de 1 à n faire\n    r ← r * a\n  Fin Pour\n  Puissance ← r\nFin", "p": "def puissance(a, n):\n    r = 1\n    for i in range(n):\n        r = r * a\n    return r\n\nprint(puissance(2, 5))   # 32"}, {"t": "[Numérique] Fonction Pgcd", "tdo": [["a, b", "Entier", "Paramètres formels"], ["r", "Entier", "Local : reste"], ["Pgcd", "Fonction → Entier", "Module"]], "a": "Fonction Pgcd(a, b : Entier) : Entier\nDébut\n  Tant que b ≠ 0 faire\n    r ← a MOD b\n    a ← b\n    b ← r\n  Fin Tant que\n  Pgcd ← a\nFin", "p": "def pgcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(pgcd(48, 18))   # 6"}, {"t": "[Numérique] Fonction Ppcm", "tdo": [["a, b", "Entier", "Paramètres formels"], ["Pgcd", "Fonction → Entier", "Module appelé"], ["Ppcm", "Fonction → Entier", "Module"]], "a": "Fonction Ppcm(a, b : Entier) : Entier\nDébut\n  Ppcm ← (a * b) DIV Pgcd(a, b)\nFin", "p": "def pgcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\ndef ppcm(a, b):\n    return a * b // pgcd(a, b)\n\nprint(ppcm(4, 6))   # 12"}, {"t": "[Numérique] Fonction Premier", "tdo": [["n", "Entier", "Paramètre formel (n ≥ 2)"], ["d", "Entier", "Local : diviseur testé"], ["Premier", "Fonction → Booléen", "Module"]], "a": "Fonction Premier(n : Entier) : Booléen\nDébut\n  d ← 2\n  Tant que (d * d ≤ n) ET (n MOD d ≠ 0) faire\n    d ← d + 1\n  Fin Tant que\n  Premier ← (d * d > n)\nFin", "p": "def premier(n):\n    d = 2\n    while d * d <= n and n % d != 0:\n        d += 1\n    return d * d > n\n\nprint(premier(97), premier(91))   # True False"}, {"t": "[Numérique] Fonction NbChiffres", "tdo": [["n", "Entier", "Paramètre formel"], ["nb", "Entier", "Local : compteur"], ["NbChiffres", "Fonction → Entier", "Module"]], "a": "Fonction NbChiffres(n : Entier) : Entier\nDébut\n  nb ← 1\n  Tant que n ≥ 10 faire\n    n ← n DIV 10\n    nb ← nb + 1\n  Fin Tant que\n  NbChiffres ← nb\nFin", "p": "def nb_chiffres(n):\n    nb = 1\n    while n >= 10:\n        n //= 10\n        nb += 1\n    return nb\n\nprint(nb_chiffres(2750))   # 4"}, {"t": "[Numérique] Fonction SommeChiffres", "tdo": [["n", "Entier", "Paramètre formel"], ["S", "Entier", "Local : somme"], ["SommeChiffres", "Fonction → Entier", "Module"]], "a": "Fonction SommeChiffres(n : Entier) : Entier\nDébut\n  S ← 0\n  Tant que n ≠ 0 faire\n    S ← S + n MOD 10\n    n ← n DIV 10\n  Fin Tant que\n  SommeChiffres ← S\nFin", "p": "def somme_chiffres(n):\n    S = 0\n    while n != 0:\n        S += n % 10\n        n //= 10\n    return S\n\nprint(somme_chiffres(2750))   # 14"}, {"t": "[Numérique] Fonction Bissextile", "tdo": [["an", "Entier", "Paramètre formel"], ["Bissextile", "Fonction → Booléen", "Module"]], "a": "Fonction Bissextile(an : Entier) : Booléen\nDébut\n  Bissextile ← ((an MOD 4 = 0) ET (an MOD 100 ≠ 0)) OU (an MOD 400 = 0)\nFin", "p": "def bissextile(an):\n    return (an % 4 == 0 and an % 100 != 0) or an % 400 == 0\n\nprint(bissextile(2024), bissextile(1900))   # True False"}, {"t": "[Numérique] Fonction Mention", "tdo": [["moy", "Réel", "Paramètre formel"], ["Mention", "Fonction → Chaîne", "Module"]], "a": "Fonction Mention(moy : Réel) : Chaîne\nDébut\n  Si moy < 10 alors Mention ← \"Ajourné\"\n  Sinon Si moy < 12 alors Mention ← \"Passable\"\n  Sinon Si moy < 14 alors Mention ← \"Assez bien\"\n  Sinon Si moy < 16 alors Mention ← \"Bien\"\n  Sinon Mention ← \"Très bien\"\n  Fin Si\nFin", "p": "def mention(moy):\n    if moy < 10: return \"Ajourné\"\n    elif moy < 12: return \"Passable\"\n    elif moy < 14: return \"Assez bien\"\n    elif moy < 16: return \"Bien\"\n    return \"Très bien\"\n\nprint(mention(12.5))   # Assez bien"}, {"t": "[Affichage] Procédure Table_mult", "tdo": [["n", "Entier", "Paramètre formel"], ["i", "Entier", "Local : compteur"], ["Table_mult", "Procédure", "Module (aucun résultat)"]], "a": "Procédure Table_mult(n : Entier)\nDébut\n  Pour i de 1 à 10 faire\n    Écrire(n, \" x \", i, \" = \", n * i)\n  Fin Pour\nFin", "p": "def table_mult(n):\n    for i in range(1, 11):\n        print(n, \"x\", i, \"=\", n * i)\n\ntable_mult(3)"}, {"t": "[Affichage] Procédure Triangle", "tdo": [["n", "Entier", "Paramètre formel"], ["i, j", "Entier", "Locaux : compteurs"], ["Triangle", "Procédure", "Module"]], "a": "Procédure Triangle(n : Entier)\nDébut\n  Pour i de 1 à n faire\n    Pour j de 1 à i faire\n      Écrire(\"*\")\n    Fin Pour\n    Écrire(\"\")      // retour à la ligne\n  Fin Pour\nFin", "p": "def triangle(n):\n    for i in range(1, n + 1):\n        for j in range(i):\n            print(\"*\", end=\"\")\n        print()\n\ntriangle(3)"}, {"t": "[Affichage] Procédure Afficher_premiers", "tdo": [["m", "Entier", "Paramètre formel"], ["i", "Entier", "Local : compteur"], ["Premier", "Fonction → Booléen", "Module appelé"]], "a": "Procédure Afficher_premiers(m : Entier)\nDébut\n  Pour i de 2 à m faire\n    Si Premier(i) alors Écrire(i)\n  Fin Pour\nFin", "p": "def premier(n):\n    d = 2\n    while d * d <= n and n % d != 0:\n        d += 1\n    return d * d > n\n\ndef afficher_premiers(m):\n    for i in range(2, m + 1):\n        if premier(i):\n            print(i, end=\" \")\n    print()\n\nafficher_premiers(20)"}, {"t": "[Chaînes] Fonction NbVoyelles", "tdo": [["ch", "Chaîne", "Paramètre formel"], ["i, nb", "Entier", "Locaux"], ["NbVoyelles", "Fonction → Entier", "Module"]], "a": "Fonction NbVoyelles(ch : Chaîne) : Entier\nDébut\n  nb ← 0\n  Pour i de 0 à Long(ch)-1 faire\n    Si Pos(ch[i], \"aeiouy\") ≠ -1 alors nb ← nb + 1\n  Fin Pour\n  NbVoyelles ← nb\nFin", "p": "def nb_voyelles(ch):\n    nb = 0\n    for i in range(len(ch)):\n        if ch[i] in \"aeiouy\":\n            nb += 1\n    return nb\n\nprint(nb_voyelles(\"programmation\"))   # 5"}, {"t": "[Chaînes] Fonction Occurrences", "tdo": [["ch", "Chaîne", "Paramètre formel"], ["c", "Caractère", "Paramètre formel"], ["i, nb", "Entier", "Locaux"], ["Occurrences", "Fonction → Entier", "Module"]], "a": "Fonction Occurrences(ch : Chaîne ; c : Caractère) : Entier\nDébut\n  nb ← 0\n  Pour i de 0 à Long(ch)-1 faire\n    Si ch[i] = c alors nb ← nb + 1\n  Fin Pour\n  Occurrences ← nb\nFin", "p": "def occurrences(ch, c):\n    nb = 0\n    for i in range(len(ch)):\n        if ch[i] == c:\n            nb += 1\n    return nb\n\nprint(occurrences(\"banane\", \"a\"))   # 2"}, {"t": "[Chaînes] Fonction Inverser", "tdo": [["ch", "Chaîne", "Paramètre formel"], ["r", "Chaîne", "Local : résultat"], ["i", "Entier", "Local : compteur"], ["Inverser", "Fonction → Chaîne", "Module"]], "a": "Fonction Inverser(ch : Chaîne) : Chaîne\nDébut\n  r ← \"\"\n  Pour i de Long(ch)-1 à 0 (pas -1) faire\n    r ← r + ch[i]\n  Fin Pour\n  Inverser ← r\nFin", "p": "def inverser(ch):\n    r = \"\"\n    for i in range(len(ch) - 1, -1, -1):\n        r = r + ch[i]\n    return r\n\nprint(inverser(\"algo\"))   # ogla"}, {"t": "[Chaînes] Fonction Palindrome", "tdo": [["ch", "Chaîne", "Paramètre formel"], ["i, j", "Entier", "Locaux : extrémités"], ["Palindrome", "Fonction → Booléen", "Module"]], "a": "Fonction Palindrome(ch : Chaîne) : Booléen\nDébut\n  i ← 0 ; j ← Long(ch) - 1\n  Tant que (i < j) ET (ch[i] = ch[j]) faire\n    i ← i + 1\n    j ← j - 1\n  Fin Tant que\n  Palindrome ← (i ≥ j)\nFin", "p": "def palindrome(ch):\n    i, j = 0, len(ch) - 1\n    while i < j and ch[i] == ch[j]:\n        i += 1\n        j -= 1\n    return i >= j\n\nprint(palindrome(\"radar\"), palindrome(\"algo\"))   # True False"}, {"t": "[Chaînes] Fonction MdpValide", "tdo": [["mdp", "Chaîne", "Paramètre formel"], ["i", "Entier", "Local"], ["chiffre", "Booléen", "Local : drapeau"], ["MdpValide", "Fonction → Booléen", "Module"]], "a": "Fonction MdpValide(mdp : Chaîne) : Booléen\nDébut\n  chiffre ← Faux\n  Pour i de 0 à Long(mdp)-1 faire\n    Si Estnum(mdp[i]) alors chiffre ← Vrai\n  Fin Pour\n  MdpValide ← (Long(mdp) ≥ 8) ET chiffre\nFin", "p": "def mdp_valide(mdp):\n    chiffre = False\n    for c in mdp:\n        if c.isdigit():\n            chiffre = True\n    return len(mdp) >= 8 and chiffre\n\nprint(mdp_valide(\"algo2026x\"), mdp_valide(\"abc123\"))   # True False"}, {"t": "[Tableaux] Procédure Remplir", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel (résultat)"], ["n", "Entier", "Paramètre formel"], ["i", "Entier", "Local : indice"], ["Remplir", "Procédure", "Module"]], "a": "Procédure Remplir(T : Tableau ; n : Entier)\nDébut\n  Pour i de 0 à n-1 faire\n    Lire(T[i])\n  Fin Pour\nFin", "p": "def remplir(T, n):\n    for i in range(n):\n        T[i] = int(input(f\"T[{i}] = \"))\n\nT = [0] * 3\nremplir(T, 3)\nprint(T)"}, {"t": "[Tableaux] Procédure Afficher", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel (donnée)"], ["n", "Entier", "Paramètre formel"], ["i", "Entier", "Local : indice"], ["Afficher", "Procédure", "Module"]], "a": "Procédure Afficher(T : Tableau ; n : Entier)\nDébut\n  Pour i de 0 à n-1 faire\n    Écrire(T[i], \" \")\n  Fin Pour\nFin", "p": "def afficher(T, n):\n    for i in range(n):\n        print(T[i], end=\" \")\n    print()\n\nafficher([4, 9, 1], 3)"}, {"t": "[Tableaux] Fonction Somme", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel"], ["n", "Entier", "Paramètre formel"], ["S, i", "Entier", "Locaux"], ["Somme", "Fonction → Entier", "Module"]], "a": "Fonction Somme(T : Tableau ; n : Entier) : Entier\nDébut\n  S ← 0\n  Pour i de 0 à n-1 faire\n    S ← S + T[i]\n  Fin Pour\n  Somme ← S\nFin", "p": "def somme(T, n):\n    S = 0\n    for i in range(n):\n        S += T[i]\n    return S\n\nprint(somme([4, 9, 1, 7], 4))   # 21"}, {"t": "[Tableaux] Fonction Moyenne", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel"], ["n", "Entier", "Paramètre formel (n > 0)"], ["Somme", "Fonction → Entier", "Module appelé"], ["Moyenne", "Fonction → Réel", "Module"]], "a": "Fonction Moyenne(T : Tableau ; n : Entier) : Réel\nDébut\n  Moyenne ← Somme(T, n) / n\nFin", "p": "def somme(T, n):\n    S = 0\n    for i in range(n):\n        S += T[i]\n    return S\n\ndef moyenne(T, n):\n    return somme(T, n) / n\n\nprint(moyenne([4, 9, 1, 7], 4))   # 5.25"}, {"t": "[Tableaux] Fonction Maximum", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel"], ["n", "Entier", "Paramètre formel"], ["m, i", "Entier", "Locaux"], ["Maximum", "Fonction → Entier", "Module"]], "a": "Fonction Maximum(T : Tableau ; n : Entier) : Entier\nDébut\n  m ← T[0]\n  Pour i de 1 à n-1 faire\n    Si T[i] > m alors m ← T[i]\n  Fin Pour\n  Maximum ← m\nFin", "p": "def maximum(T, n):\n    m = T[0]\n    for i in range(1, n):\n        if T[i] > m:\n            m = T[i]\n    return m\n\nprint(maximum([4, 9, 1, 7], 4))   # 9"}, {"t": "[Tableaux] Fonction Indice_min", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel"], ["n", "Entier", "Paramètre formel"], ["pm, i", "Entier", "Locaux"], ["Indice_min", "Fonction → Entier", "Module"]], "a": "Fonction Indice_min(T : Tableau ; n : Entier) : Entier\nDébut\n  pm ← 0\n  Pour i de 1 à n-1 faire\n    Si T[i] < T[pm] alors pm ← i\n  Fin Pour\n  Indice_min ← pm\nFin", "p": "def indice_min(T, n):\n    pm = 0\n    for i in range(1, n):\n        if T[i] < T[pm]:\n            pm = i\n    return pm\n\nprint(indice_min([4, 9, 1, 7], 4))   # 2"}, {"t": "[Recherche et tri] Fonction Recherche_seq", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel"], ["n, x", "Entier", "Paramètres formels"], ["i", "Entier", "Local : indice courant"], ["Recherche_seq", "Fonction → Entier", "Module"]], "a": "Fonction Recherche_seq(T : Tableau ; n, x : Entier) : Entier\nDébut\n  i ← 0\n  Tant que (i < n) ET (T[i] ≠ x) faire\n    i ← i + 1\n  Fin Tant que\n  Si i < n alors Recherche_seq ← i\n  Sinon Recherche_seq ← -1\n  Fin Si\nFin", "p": "def recherche_seq(T, n, x):\n    i = 0\n    while i < n and T[i] != x:\n        i += 1\n    return i if i < n else -1\n\nprint(recherche_seq([12, 5, 9, 31, 7], 5, 9), recherche_seq([12, 5, 9], 3, 4))   # 2 -1"}, {"t": "[Recherche et tri] Fonction Dicho", "tdo": [["T", "Tableau trié de n Entiers", "Paramètre formel"], ["n, x", "Entier", "Paramètres formels"], ["g, d, m", "Entier", "Locaux : bornes et milieu"], ["trouve", "Booléen", "Local : drapeau"], ["Dicho", "Fonction → Entier", "Module"]], "a": "Fonction Dicho(T : Tableau ; n, x : Entier) : Entier\nDébut\n  g ← 0 ; d ← n - 1 ; Dicho ← -1\n  Tant que g ≤ d faire\n    m ← (g + d) DIV 2\n    Si T[m] = x alors\n      Dicho ← m ; g ← d + 1       // arrêt\n    Sinon Si T[m] < x alors g ← m + 1\n    Sinon d ← m - 1\n    Fin Si\n  Fin Tant que\nFin", "p": "def dicho(T, n, x):\n    g, d = 0, n - 1\n    while g <= d:\n        m = (g + d) // 2\n        if T[m] == x:\n            return m\n        elif T[m] < x:\n            g = m + 1\n        else:\n            d = m - 1\n    return -1\n\nT = [3, 7, 9, 12, 31]\nprint(dicho(T, 5, 12), dicho(T, 5, 5))   # 3 -1"}, {"t": "[Recherche et tri] Procédure Tri_selection", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel (donnée / résultat)"], ["n", "Entier", "Paramètre formel"], ["i, j", "Entier", "Locaux : indices"], ["pm", "Entier", "Local : position du minimum"], ["aux", "Entier", "Local : échange"]], "a": "Procédure Tri_selection(T : Tableau ; n : Entier)\nDébut\n  Pour i de 0 à n-2 faire\n    pm ← i\n    Pour j de i+1 à n-1 faire\n      Si T[j] < T[pm] alors pm ← j\n    Fin Pour\n    Si pm ≠ i alors\n      aux ← T[i] ; T[i] ← T[pm] ; T[pm] ← aux\n    Fin Si\n  Fin Pour\nFin", "p": "def tri_selection(T, n):\n    for i in range(n - 1):\n        pm = i\n        for j in range(i + 1, n):\n            if T[j] < T[pm]:\n                pm = j\n        T[i], T[pm] = T[pm], T[i]\n\nT = [5, 2, 4, 1]\ntri_selection(T, 4)\nprint(T)"}, {"t": "[Recherche et tri] Procédure Tri_bulles", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel (donnée / résultat)"], ["n", "Entier", "Paramètre formel"], ["i, j", "Entier", "Locaux : indices"], ["aux", "Entier", "Local : échange"]], "a": "Procédure Tri_bulles(T : Tableau ; n : Entier)\nDébut\n  Pour i de n-1 à 1 (pas -1) faire\n    Pour j de 0 à i-1 faire\n      Si T[j] > T[j+1] alors\n        aux ← T[j] ; T[j] ← T[j+1] ; T[j+1] ← aux\n      Fin Si\n    Fin Pour\n  Fin Pour\nFin", "p": "def tri_bulles(T, n):\n    for i in range(n - 1, 0, -1):\n        for j in range(i):\n            if T[j] > T[j + 1]:\n                T[j], T[j + 1] = T[j + 1], T[j]\n\nT = [5, 2, 4, 1]\ntri_bulles(T, 4)\nprint(T)"}, {"t": "[Recherche et tri] Procédure Tri_insertion", "tdo": [["T", "Tableau de n Entiers", "Paramètre formel (donnée / résultat)"], ["n", "Entier", "Paramètre formel"], ["i, j", "Entier", "Locaux : indices"], ["cle", "Entier", "Local : élément à insérer"]], "a": "Procédure Tri_insertion(T : Tableau ; n : Entier)\nDébut\n  Pour i de 1 à n-1 faire\n    cle ← T[i] ; j ← i - 1\n    Tant que (j ≥ 0) ET (T[j] > cle) faire\n      T[j+1] ← T[j]\n      j ← j - 1\n    Fin Tant que\n    T[j+1] ← cle\n  Fin Pour\nFin", "p": "def tri_insertion(T, n):\n    for i in range(1, n):\n        cle, j = T[i], i - 1\n        while j >= 0 and T[j] > cle:\n            T[j + 1] = T[j]\n            j -= 1\n        T[j + 1] = cle\n\nT = [5, 2, 4, 1]\ntri_insertion(T, 4)\nprint(T)"}],html:"<div class=\"card\"><h3>Liste des modules</h3><table><tr><th>N°</th><th>Module</th><th>Nature</th><th>Rôle</th><th>Catégorie</th></tr><tr><td>1</td><td><b>Carre</b></td><td>Fonction</td><td>Carré d’un entier</td><td>Numérique</td></tr><tr><td>2</td><td><b>ValAbs</b></td><td>Fonction</td><td>Valeur absolue d’un réel</td><td>Numérique</td></tr><tr><td>3</td><td><b>Max2</b></td><td>Fonction</td><td>Plus grand de deux entiers</td><td>Numérique</td></tr><tr><td>4</td><td><b>EstPair</b></td><td>Fonction</td><td>Teste si un entier est pair</td><td>Numérique</td></tr><tr><td>5</td><td><b>Factorielle</b></td><td>Fonction</td><td>n! = 1 × 2 × … × n (n ≥ 0)</td><td>Numérique</td></tr><tr><td>6</td><td><b>Puissance</b></td><td>Fonction</td><td>aⁿ sans utiliser l’opérateur de puissance</td><td>Numérique</td></tr><tr><td>7</td><td><b>Pgcd</b></td><td>Fonction</td><td>PGCD de deux entiers (algorithme d’Euclide)</td><td>Numérique</td></tr><tr><td>8</td><td><b>Ppcm</b></td><td>Fonction</td><td>PPCM de deux entiers (utilise la fonction Pgcd)</td><td>Numérique</td></tr><tr><td>9</td><td><b>Premier</b></td><td>Fonction</td><td>Teste si n ≥ 2 est premier</td><td>Numérique</td></tr><tr><td>10</td><td><b>NbChiffres</b></td><td>Fonction</td><td>Nombre de chiffres d’un entier n ≥ 0</td><td>Numérique</td></tr><tr><td>11</td><td><b>SommeChiffres</b></td><td>Fonction</td><td>Somme des chiffres d’un entier n ≥ 0</td><td>Numérique</td></tr><tr><td>12</td><td><b>Bissextile</b></td><td>Fonction</td><td>Teste si une année est bissextile</td><td>Numérique</td></tr><tr><td>13</td><td><b>Mention</b></td><td>Fonction</td><td>Mention correspondant à une moyenne</td><td>Numérique</td></tr><tr><td>14</td><td><b>Table_mult</b></td><td>Procédure</td><td>Affiche la table de multiplication de n</td><td>Affichage</td></tr><tr><td>15</td><td><b>Triangle</b></td><td>Procédure</td><td>Affiche un triangle d’étoiles de n lignes</td><td>Affichage</td></tr><tr><td>16</td><td><b>Afficher_premiers</b></td><td>Procédure</td><td>Affiche les nombres premiers de 2 à m (utilise Premier)</td><td>Affichage</td></tr><tr><td>17</td><td><b>NbVoyelles</b></td><td>Fonction</td><td>Nombre de voyelles d’une chaîne</td><td>Chaînes</td></tr><tr><td>18</td><td><b>Occurrences</b></td><td>Fonction</td><td>Nombre d’occurrences d’un caractère dans une chaîne</td><td>Chaînes</td></tr><tr><td>19</td><td><b>Inverser</b></td><td>Fonction</td><td>Chaîne lue à l’envers</td><td>Chaînes</td></tr><tr><td>20</td><td><b>Palindrome</b></td><td>Fonction</td><td>Teste si une chaîne est un palindrome</td><td>Chaînes</td></tr><tr><td>21</td><td><b>MdpValide</b></td><td>Fonction</td><td>Mot de passe valide : au moins 8 caractères dont un chiffre</td><td>Chaînes</td></tr><tr><td>22</td><td><b>Remplir</b></td><td>Procédure</td><td>Saisie des n éléments d’un tableau</td><td>Tableaux</td></tr><tr><td>23</td><td><b>Afficher</b></td><td>Procédure</td><td>Affichage des n éléments d’un tableau</td><td>Tableaux</td></tr><tr><td>24</td><td><b>Somme</b></td><td>Fonction</td><td>Somme des éléments d’un tableau</td><td>Tableaux</td></tr><tr><td>25</td><td><b>Moyenne</b></td><td>Fonction</td><td>Moyenne des éléments (utilise Somme)</td><td>Tableaux</td></tr><tr><td>26</td><td><b>Maximum</b></td><td>Fonction</td><td>Plus grand élément d’un tableau (n ≥ 1)</td><td>Tableaux</td></tr><tr><td>27</td><td><b>Indice_min</b></td><td>Fonction</td><td>Indice de la plus petite valeur (première occurrence)</td><td>Tableaux</td></tr><tr><td>28</td><td><b>Recherche_seq</b></td><td>Fonction</td><td>Recherche séquentielle : indice de x ou -1</td><td>Recherche et tri</td></tr><tr><td>29</td><td><b>Dicho</b></td><td>Fonction</td><td>Recherche dichotomique dans un tableau trié : indice de x ou -1</td><td>Recherche et tri</td></tr><tr><td>30</td><td><b>Tri_selection</b></td><td>Procédure</td><td>Tri croissant par sélection du minimum</td><td>Recherche et tri</td></tr><tr><td>31</td><td><b>Tri_bulles</b></td><td>Procédure</td><td>Tri croissant par échange des voisins</td><td>Recherche et tri</td></tr><tr><td>32</td><td><b>Tri_insertion</b></td><td>Procédure</td><td>Tri croissant par insertion</td><td>Recherche et tri</td></tr></table></div><div class=\"card\"><h3>Conventions</h3><ul><li><b>Fonction</b> : retourne un résultat (on l’écrit Nom ← valeur) ; <b>procédure</b> : réalise une action, sans résultat.</li><li><b>TDO</b> : objets du module — paramètres formels (donnée ou résultat) et objets locaux.</li><li>En Python : <code>def nom(paramètres):</code> ; une fonction se termine par <code>return</code> ; une procédure n’a pas de <code>return</code>.</li><li>Les tableaux (listes) sont modifiés en place : une procédure de tri agit directement sur le tableau reçu.</li><li>Chaque programme Python se termine par un exemple d’appel, exécutable dans la page.</li></ul></div>"});
const ORD=['dem','sd','syn','cond','sel','iter','it','mod','ch','tab','rech','tri','synt','act','proj','err','eval','ser1','ser2','ser3','lib'];
const MM={"global": "<svg viewBox=\"0 0 1160 468\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Algorithmique et programmation Python – 3 Sc\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 234 C440 234 440 122 410 122\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 122 C240 122 240 80 220 80\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 122 C240 122 240 115 220 115\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 122 C240 122 240 156 220 156\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 234 C440 234 440 234 410 234\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 234 C240 234 240 200 220 200\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 234 C240 234 240 234 220 234\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 234 C240 234 240 268 220 268\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 234 C440 234 440 346 410 346\" fill=\"none\" stroke=\"#00838f\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 346 C240 346 240 312 220 312\" fill=\"none\" stroke=\"#00838f\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 346 C240 346 240 346 220 346\" fill=\"none\" stroke=\"#00838f\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 346 C240 346 240 381 220 381\" fill=\"none\" stroke=\"#00838f\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 234 C720 234 720 75 750 75\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 61 940 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 96 940 96\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 124 940 124\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 234 C720 234 720 195 750 195\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 195 C920 195 920 167 940 167\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 195 C920 195 920 202 940 202\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 195 C920 195 920 230 940 230\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 234 C720 234 720 301 750 301\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 301 C920 301 920 273 940 273\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 301 C920 301 920 308 940 308\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 301 C920 301 920 336 940 336\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 234 C720 234 720 407 750 407\" fill=\"none\" stroke=\"#d35400\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 407 C920 407 920 372 940 372\" fill=\"none\" stroke=\"#d35400\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 407 C920 407 920 400 940 400\" fill=\"none\" stroke=\"#d35400\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 407 C920 407 920 435 940 435\" fill=\"none\" stroke=\"#d35400\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"104\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"121.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Données</text><rect x=\"20\" y=\"69\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Constantes et variables</text><rect x=\"20\" y=\"97\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"108.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Types : entier, réel,</text><text x=\"120\" y=\"121.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">booléen, caractère, chaîne</text><rect x=\"20\" y=\"138\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"149.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Opérateurs et fonctions</text><text x=\"120\" y=\"162.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">prédéfinies</text><rect x=\"260\" y=\"217\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"234.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Itératifs</text><rect x=\"20\" y=\"188\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"199.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Pour : nombre connu</text><rect x=\"20\" y=\"216\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"227.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tant que : condition de</text><text x=\"120\" y=\"240.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">continuité</text><rect x=\"20\" y=\"257\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"268.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Répéter : au moins une fois</text><rect x=\"260\" y=\"330\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#00838f;stroke:#00838f;stroke-width:1.6\"/><text x=\"335\" y=\"346.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Modules</text><rect x=\"20\" y=\"294\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#00838f;stroke-width:1.6\"/><text x=\"120\" y=\"305.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Fonction : retourne un</text><text x=\"120\" y=\"318.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">résultat</text><rect x=\"20\" y=\"335\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#00838f;stroke-width:1.6\"/><text x=\"120\" y=\"346.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Procédure : action</text><rect x=\"20\" y=\"363\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#00838f;stroke-width:1.6\"/><text x=\"120\" y=\"374.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Paramètres formels /</text><text x=\"120\" y=\"387.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">effectifs</text><rect x=\"750\" y=\"58\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"75.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Démarche</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Comprendre l’énoncé</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Analyser : résultats,</text><text x=\"1040\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">données, traitements</text><rect x=\"940\" y=\"84\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">TDO et modules</text><rect x=\"940\" y=\"112\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"123.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tester avec jeux d’essai</text><rect x=\"750\" y=\"178\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"195.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Conditionnels</text><rect x=\"940\" y=\"149\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Si réduit, complet,</text><text x=\"1040\" y=\"173.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">généralisé</text><rect x=\"940\" y=\"190\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"201.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Conditions : ET, OU, NON</text><rect x=\"940\" y=\"218\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"229.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Selon</text><rect x=\"750\" y=\"284\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#6a1b9a;stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"825\" y=\"301.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Structures</text><rect x=\"940\" y=\"255\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"266.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Chaînes : indices de 0 à</text><text x=\"1040\" y=\"279.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Long − 1</text><rect x=\"940\" y=\"296\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"307.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tableaux 1D</text><rect x=\"940\" y=\"324\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"335.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tableaux 2D : numpy</text><rect x=\"750\" y=\"390\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#d35400;stroke:#d35400;stroke-width:1.6\"/><text x=\"825\" y=\"407.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Recherche et tri</text><rect x=\"940\" y=\"361\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#d35400;stroke-width:1.6\"/><text x=\"1040\" y=\"372.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Séquentielle, dichotomique</text><rect x=\"940\" y=\"389\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#d35400;stroke-width:1.6\"/><text x=\"1040\" y=\"400.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Maximum, minimum</text><rect x=\"940\" y=\"417\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#d35400;stroke-width:1.6\"/><text x=\"1040\" y=\"428.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Sélection, bulles,</text><text x=\"1040\" y=\"441.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">insertion</text><rect x=\"470\" y=\"204\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"218.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Algorithmique et</text><text x=\"580\" y=\"234.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">programmation</text><text x=\"580\" y=\"249.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Python – 3 Sc</text></svg>", "dem": "<svg viewBox=\"0 0 1160 228\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Démarche de résolution\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 114 C440 114 440 68 410 68\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 40 220 40\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 68 220 68\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 96 220 96\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 114 C440 114 440 160 410 160\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 160 C240 160 240 132 220 132\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 160 C240 160 240 160 220 160\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 160 C240 160 240 188 220 188\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 114 C720 114 720 61 750 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 61 940 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 96 940 96\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 114 C720 114 720 167 750 167\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 167 C920 167 920 132 940 132\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 167 C920 167 920 167 940 167\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 167 C920 167 920 202 940 202\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"50\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Écrire</text><rect x=\"20\" y=\"28\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"39.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">TDO</text><rect x=\"20\" y=\"56\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Algorithme</text><rect x=\"20\" y=\"84\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Traduction en Python</text><rect x=\"260\" y=\"144\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Vocabulaire</text><rect x=\"20\" y=\"121\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Donnée = entrée</text><rect x=\"20\" y=\"149\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Résultat = sortie</text><rect x=\"20\" y=\"177\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"188.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Traitement = calcul</text><rect x=\"750\" y=\"44\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"61.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Avant le code</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Comprendre l’énoncé</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Analyser : résultats,</text><text x=\"1040\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">données, traitements</text><rect x=\"940\" y=\"84\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Décomposer en modules</text><rect x=\"750\" y=\"150\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"167.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Valider</text><rect x=\"940\" y=\"121\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Jeux d’essai</text><rect x=\"940\" y=\"149\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Comparer au résultat</text><text x=\"1040\" y=\"173.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">attendu</text><rect x=\"940\" y=\"190\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"201.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Revenir à l’étape fautive</text><rect x=\"470\" y=\"84\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"106.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Démarche de</text><text x=\"580\" y=\"121.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">résolution</text></svg>", "sd": "<svg viewBox=\"0 0 1160 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Structures de données\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 115 C440 115 440 68 410 68\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 26 220 26\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 54 220 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 82 220 82\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 68 C240 68 240 110 220 110\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 115 C440 115 440 176 410 176\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 176 C240 176 240 148 220 148\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 176 C240 176 240 176 220 176\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 176 C240 176 240 204 220 204\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 115 C720 115 720 68 750 68\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 68 C920 68 920 34 940 34\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 68 C920 68 920 68 940 68\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 68 C920 68 920 103 940 103\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 115 C720 115 720 168 750 168\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 168 C920 168 920 140 940 140\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 168 C920 168 920 168 940 168\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 168 C920 168 920 196 940 196\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"52\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"68.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Types</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Entier, Réel</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Booléen</text><rect x=\"20\" y=\"71\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Caractère, Chaîne</text><rect x=\"20\" y=\"99\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"110.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tableau</text><rect x=\"260\" y=\"158\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Fonctions</text><rect x=\"20\" y=\"136\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"147.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Abs, Racine_carrée</text><rect x=\"20\" y=\"164\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Long, Pos, Sous_chaine</text><rect x=\"20\" y=\"192\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"203.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Convch, Valeur</text><rect x=\"750\" y=\"52\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"68.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Objets</text><rect x=\"940\" y=\"22\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"34.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Constante : valeur fixe</text><rect x=\"940\" y=\"50\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"62.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Variable : valeur</text><text x=\"1040\" y=\"75.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">modifiable</text><rect x=\"940\" y=\"92\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"103.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">TDO : nom, type, rôle</text><rect x=\"750\" y=\"151\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"168.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Opérateurs</text><rect x=\"940\" y=\"128\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"140.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">+ − * / DIV MOD</text><rect x=\"940\" y=\"156\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"168.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">= ≠ &lt; &gt; ≤ ≥</text><rect x=\"940\" y=\"184\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"196.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">ET, OU, NON</text><rect x=\"470\" y=\"85\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"107.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Structures de</text><text x=\"580\" y=\"122.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">données</text></svg>", "syn": "<svg viewBox=\"0 0 1160 243\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Organigrammes\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 122 C440 122 440 82 410 82\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 82 C240 82 240 54 220 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 82 C240 82 240 82 220 82\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 82 C240 82 240 110 220 110\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 122 C440 122 440 168 410 168\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 168 C240 168 240 148 220 148\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 168 C240 168 240 182 220 182\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 122 C720 122 720 75 750 75\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 61 940 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 96 940 96\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 124 940 124\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 122 C720 122 720 188 750 188\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 188 C920 188 920 160 940 160\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 188 C920 188 920 188 940 188\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 188 C920 188 920 216 940 216\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"66\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Si</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Réduit</text><rect x=\"20\" y=\"71\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Complet</text><rect x=\"20\" y=\"99\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"110.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Généralisé</text><rect x=\"260\" y=\"151\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"168.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Python</text><rect x=\"20\" y=\"136\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"147.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Indentation de 4 espaces</text><rect x=\"20\" y=\"164\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Deux-points après if, for,</text><text x=\"120\" y=\"188.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">while</text><rect x=\"750\" y=\"58\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"75.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Symboles</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Ovale : début / fin</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Parallélogramme : lire /</text><text x=\"1040\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">écrire</text><rect x=\"940\" y=\"84\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Rectangle : traitement</text><rect x=\"940\" y=\"112\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"123.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Losange : test</text><rect x=\"750\" y=\"172\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"188.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Boucles</text><rect x=\"940\" y=\"149\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Pour</text><rect x=\"940\" y=\"177\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"188.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tant que</text><rect x=\"940\" y=\"205\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"216.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Répéter</text><rect x=\"470\" y=\"92\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"121.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Organigrammes</text></svg>", "cond": "<svg viewBox=\"0 0 1160 239\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Traitements conditionnels\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 120 C440 120 440 80 410 80\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 80 C240 80 240 80 220 80\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 120 C440 120 440 138 410 138\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 138 C240 138 240 118 220 118\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 138 C240 138 240 152 220 152\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 120 C720 120 720 54 750 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 54 C920 54 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 54 C920 54 920 54 940 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 54 C920 54 920 82 940 82\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 120 C720 120 720 120 750 120\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 120 C920 120 920 120 940 120\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 120 C720 120 720 184 750 184\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 184 C920 184 920 156 940 156\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 184 C920 184 920 184 940 184\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 184 C920 184 920 212 940 212\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"64\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Si réduit</text><rect x=\"20\" y=\"69\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Un traitement ou rien</text><rect x=\"260\" y=\"121\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"138.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Si généralisé</text><rect x=\"20\" y=\"106\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Plusieurs cas</text><rect x=\"20\" y=\"134\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"145.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">La première condition vraie</text><text x=\"120\" y=\"158.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">gagne</text><rect x=\"750\" y=\"38\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Condition</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Expression booléenne</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Comparaisons</text><rect x=\"940\" y=\"71\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">ET, OU, NON</text><rect x=\"750\" y=\"102\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Si complet</text><rect x=\"940\" y=\"108\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Deux cas : Alors / Sinon</text><rect x=\"750\" y=\"168\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#6a1b9a;stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"825\" y=\"184.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Pièges</text><rect x=\"940\" y=\"145\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"156.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">= et ==</text><rect x=\"940\" y=\"173\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"184.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Ordre des conditions</text><rect x=\"940\" y=\"201\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"212.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Cas limites</text><rect x=\"470\" y=\"90\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"111.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Traitements</text><text x=\"580\" y=\"127.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">conditionnels</text></svg>", "sel": "<svg viewBox=\"0 0 1160 146\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Selon\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 73 C440 73 440 40 410 40\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 40 C240 40 240 40 220 40\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 73 C440 73 440 92 410 92\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 92 C240 92 240 78 220 78\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 92 C240 92 240 106 220 106\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 73 C720 73 720 40 750 40\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 40 C920 40 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 40 C920 40 920 54 940 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 73 C720 73 720 106 750 106\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 106 C920 106 920 92 940 92\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 106 C920 106 920 120 940 120\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"24\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Sinon</text><rect x=\"20\" y=\"29\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Cas non prévus</text><rect x=\"260\" y=\"74\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Python</text><rect x=\"20\" y=\"66\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"77.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">if / elif / else</text><rect x=\"20\" y=\"94\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"105.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">match (3.10)</text><rect x=\"750\" y=\"24\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Principe</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Un sélecteur</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Des valeurs exactes par cas</text><rect x=\"750\" y=\"88\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"105.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Quand l’utiliser</text><rect x=\"940\" y=\"80\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Jours, mois, opérateurs</text><rect x=\"940\" y=\"108\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Pas pour les intervalles</text><rect x=\"470\" y=\"43\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"73.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Selon</text></svg>", "iter": "<svg viewBox=\"0 0 1160 187\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Traitements itératifs\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 94 C440 94 440 40 410 40\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 40 C240 40 240 26 220 26\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 40 C240 40 240 54 220 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 94 C440 94 440 126 410 126\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 126 C240 126 240 92 220 92\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 126 C240 126 240 126 220 126\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 126 C240 126 240 160 220 160\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 94 C720 94 720 42 750 42\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 42 C920 42 920 28 940 28\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 42 C920 42 920 56 940 56\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 94 C720 94 720 108 750 108\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 108 C920 108 920 94 940 94\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 108 C920 108 920 122 940 122\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 94 C720 94 720 158 750 158\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 158 C920 158 920 158 940 158\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"24\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Tant que</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Condition de continuité</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Peut ne jamais s’exécuter</text><rect x=\"260\" y=\"109\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"126.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Schémas</text><rect x=\"20\" y=\"80\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Compteur</text><rect x=\"20\" y=\"108\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Accumulateur : somme 0,</text><text x=\"120\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">produit 1</text><rect x=\"20\" y=\"149\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Drapeau</text><rect x=\"750\" y=\"26\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"42.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Pour</text><rect x=\"940\" y=\"17\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"28.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Nombre de tours connu</text><rect x=\"940\" y=\"45\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"56.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Compteur automatique</text><rect x=\"750\" y=\"90\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Répéter</text><rect x=\"940\" y=\"82\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"93.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Condition d’arrêt</text><rect x=\"940\" y=\"110\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"121.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Au moins un passage</text><rect x=\"750\" y=\"142\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#6a1b9a;stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"825\" y=\"158.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Piège</text><rect x=\"940\" y=\"147\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"158.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Boucle infinie</text><rect x=\"470\" y=\"64\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"85.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Traitements</text><text x=\"580\" y=\"101.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">itératifs</text></svg>", "it": "<svg viewBox=\"0 0 1160 159\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : PGCD, PPCM, nombres premiers\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 80 C440 80 440 47 410 47\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 47 C240 47 240 33 220 33\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 47 C240 47 240 68 220 68\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 80 C440 80 440 118 410 118\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 118 C240 118 240 104 220 104\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 118 C240 118 240 132 220 132\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 80 C720 80 720 61 750 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 47 940 47\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 75 940 75\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 80 C720 80 720 112 750 112\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 112 C920 112 920 112 940 112\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"30\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"47.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">PGCD</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Euclide : (a, b) → (b, a</text><text x=\"120\" y=\"39.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">MOD b)</text><rect x=\"20\" y=\"56\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Arrêt quand b = 0</text><rect x=\"260\" y=\"102\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"118.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Premier</text><rect x=\"20\" y=\"93\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"104.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Diviseurs d avec d × d ≤ n</text><rect x=\"20\" y=\"121\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Décomposition en facteurs</text><rect x=\"750\" y=\"44\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"61.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Division</text><rect x=\"940\" y=\"36\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"47.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">a = b × q + r</text><rect x=\"940\" y=\"64\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"75.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">DIV donne q, MOD donne r</text><rect x=\"750\" y=\"95\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"112.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">PPCM</text><rect x=\"940\" y=\"100\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"112.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">a × b DIV PGCD</text><rect x=\"470\" y=\"50\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"71.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">PGCD, PPCM, nombres</text><text x=\"580\" y=\"87.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">premiers</text></svg>", "mod": "<svg viewBox=\"0 0 1160 239\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Modularité\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 120 C440 120 440 87 410 87\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 87 C240 87 240 66 220 66\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 87 C240 87 240 101 220 101\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 120 C440 120 440 158 410 158\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 158 C240 158 240 144 220 144\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 158 C240 158 240 172 220 172\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 120 C720 120 720 54 750 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 54 C920 54 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 54 C920 54 920 54 940 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 54 C920 54 920 82 940 82\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 120 C720 120 720 134 750 134\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 134 C920 134 920 120 940 120\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 134 C920 134 920 148 940 148\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 120 C720 120 720 198 750 198\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 198 C920 198 920 184 940 184\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 198 C920 198 920 212 940 212\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"70\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"87.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Fonction</text><rect x=\"20\" y=\"55\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"66.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Retourne un résultat</text><rect x=\"20\" y=\"83\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"94.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Utilisée dans une</text><text x=\"120\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">expression</text><rect x=\"260\" y=\"142\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"158.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Paramètres</text><rect x=\"20\" y=\"133\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"144.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Formels : déclaration</text><rect x=\"20\" y=\"161\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Effectifs : appel</text><rect x=\"750\" y=\"38\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Pourquoi</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Lisibilité</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Réutilisation</text><rect x=\"940\" y=\"71\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Test séparé</text><rect x=\"750\" y=\"116\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"133.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Procédure</text><rect x=\"940\" y=\"108\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Réalise une action</text><rect x=\"940\" y=\"136\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"147.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Appelée seule</text><rect x=\"750\" y=\"182\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#6a1b9a;stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"825\" y=\"198.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Portée</text><rect x=\"940\" y=\"173\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"184.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Locale</text><rect x=\"940\" y=\"201\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"212.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Globale</text><rect x=\"470\" y=\"90\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Modularité</text></svg>", "ch": "<svg viewBox=\"0 0 1160 187\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Chaînes de caractères\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 94 C440 94 440 54 410 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 54 C240 54 240 26 220 26\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 54 C240 54 240 54 220 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 54 C240 54 240 82 220 82\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 94 C440 94 440 140 410 140\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 140 C240 140 240 120 220 120\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 140 C240 140 240 154 220 154\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 94 C720 94 720 75 750 75\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 61 940 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 75 C920 75 920 89 940 89\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 94 C720 94 720 126 750 126\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 126 C920 126 920 126 940 126\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"38\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Fonctions</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Long, Pos</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Sous_chaine, Effacer</text><rect x=\"20\" y=\"71\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Concaténation +</text><rect x=\"260\" y=\"123\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"140.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Pièges</text><rect x=\"20\" y=\"108\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Position finale exclue</text><rect x=\"20\" y=\"136\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"147.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Chaîne non modifiable en</text><text x=\"120\" y=\"160.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Python</text><rect x=\"750\" y=\"58\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"75.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Indices</text><rect x=\"940\" y=\"50\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"61.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">De 0 à Long − 1</text><rect x=\"940\" y=\"78\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"89.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">ch[i] : un caractère</text><rect x=\"750\" y=\"109\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"126.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Parcours</text><rect x=\"940\" y=\"114\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"126.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Pour i de 0 à Long − 1</text><rect x=\"470\" y=\"64\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"85.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Chaînes de</text><text x=\"580\" y=\"101.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">caractères</text></svg>", "tab": "<svg viewBox=\"0 0 1160 183\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Tableaux\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 92 C440 92 440 59 410 59\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 59 C240 59 240 31 220 31\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 59 C240 59 240 59 220 59\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 59 C240 59 240 87 220 87\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 92 C440 92 440 138 410 138\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 138 C240 138 240 124 220 124\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 138 C240 138 240 152 220 152\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 92 C720 92 720 40 750 40\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 40 C920 40 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 40 C920 40 920 54 940 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 92 C720 92 720 92 750 92\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 92 C920 92 920 92 940 92\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 92 C720 92 720 142 750 142\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 142 C920 142 920 128 940 128\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 142 C920 142 920 156 940 156\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"42\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"59.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Parcours</text><rect x=\"20\" y=\"20\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"31.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Remplir</text><rect x=\"20\" y=\"48\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"59.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Afficher</text><rect x=\"20\" y=\"76\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"87.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Somme, moyenne</text><rect x=\"260\" y=\"121\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"138.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Deux dimensions</text><rect x=\"20\" y=\"112\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"124.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">M[ligne][colonne]</text><rect x=\"20\" y=\"140\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"152.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Boucles imbriquées</text><rect x=\"750\" y=\"24\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Déclaration</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">T : Tableau de n éléments</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Indices de 0 à n − 1</text><rect x=\"750\" y=\"74\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Min et max</text><rect x=\"940\" y=\"80\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Partir de T[0]</text><rect x=\"750\" y=\"126\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#6a1b9a;stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"825\" y=\"142.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Python</text><rect x=\"940\" y=\"117\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"128.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">array</text><rect x=\"940\" y=\"145\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#6a1b9a;stroke-width:1.6\"/><text x=\"1040\" y=\"156.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">numpy</text><rect x=\"470\" y=\"62\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Tableaux</text></svg>", "rech": "<svg viewBox=\"0 0 1160 159\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Recherches\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 80 C440 80 440 61 410 61\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 61 C240 61 240 26 220 26\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 61 C240 61 240 61 220 61\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 61 C240 61 240 96 220 96\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 80 C440 80 440 132 410 132\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 132 C240 132 240 132 220 132\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 80 C720 80 720 61 750 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 47 940 47\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 61 C920 61 920 75 940 75\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 80 C720 80 720 112 750 112\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 112 C920 112 920 112 940 112\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"44\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"61.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Dichotomique</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tableau trié</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Moitié éliminée à chaque</text><text x=\"120\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">pas</text><rect x=\"20\" y=\"84\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Environ log₂ n comparaisons</text><rect x=\"260\" y=\"116\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Choisir</text><rect x=\"20\" y=\"121\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Trié ? Grand tableau ?</text><rect x=\"750\" y=\"44\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"61.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Séquentielle</text><rect x=\"940\" y=\"36\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"47.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Tout tableau</text><rect x=\"940\" y=\"64\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"75.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Jusqu’à n comparaisons</text><rect x=\"750\" y=\"95\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"112.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Maximum, minimum</text><rect x=\"940\" y=\"100\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"112.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Initialiser avec T[0]</text><rect x=\"470\" y=\"50\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Recherches</text></svg>", "tri": "<svg viewBox=\"0 0 1160 146\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Tris\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 73 C440 73 440 40 410 40\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 40 C240 40 240 26 220 26\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 40 C240 40 240 54 220 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 73 C440 73 440 106 410 106\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 106 C240 106 240 92 220 92\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 106 C240 106 240 120 220 120\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 73 C720 73 720 40 750 40\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 40 C920 40 920 26 940 26\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 40 C920 40 920 54 940 54\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 73 C720 73 720 106 750 106\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 106 C920 106 920 92 940 92\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 106 C920 106 920 120 940 120\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"24\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Sélection</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Chercher le minimum</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Échanger avec la tête</text><rect x=\"260\" y=\"88\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"105.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Insertion</text><rect x=\"20\" y=\"80\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Comme des cartes</text><rect x=\"20\" y=\"108\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Rapide si presque trié</text><rect x=\"750\" y=\"24\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Pourquoi trier</text><rect x=\"940\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Lire, comparer</text><rect x=\"940\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Permettre la dichotomie</text><rect x=\"750\" y=\"88\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"105.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Bulles</text><rect x=\"940\" y=\"80\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"91.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Échanger les voisins</text><rect x=\"940\" y=\"108\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Le plus grand monte</text><rect x=\"470\" y=\"43\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"73.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Tris</text></svg>", "err": "<svg viewBox=\"0 0 1160 159\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carte mentale : Erreurs en Python\" style=\"font-family:Segoe UI,Arial,sans-serif\"><path d=\"M470 80 C440 80 440 54 410 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 54 C240 54 240 26 220 26\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 54 C240 54 240 54 220 54\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260 54 C240 54 240 82 220 82\" fill=\"none\" stroke=\"#e8890c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M470 80 C440 80 440 126 410 126\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M260 126 C240 126 240 126 220 126\" fill=\"none\" stroke=\"#c2185b\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 80 C720 80 720 47 750 47\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 47 C920 47 920 33 940 33\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 47 C920 47 920 61 940 61\" fill=\"none\" stroke=\"#2f5bea\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M690 80 C720 80 720 112 750 112\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><path d=\"M900 112 C920 112 920 98 940 98\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M900 112 C920 112 920 126 940 126\" fill=\"none\" stroke=\"#1e9e5a\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"260\" y=\"38\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#e8890c;stroke:#e8890c;stroke-width:1.6\"/><text x=\"335\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Exécution</text><rect x=\"20\" y=\"15\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"26.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">NameError, TypeError</text><rect x=\"20\" y=\"43\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"54.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">ValueError, IndexError</text><rect x=\"20\" y=\"71\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#e8890c;stroke-width:1.6\"/><text x=\"120\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">ZeroDivisionError</text><rect x=\"260\" y=\"109\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#c2185b;stroke:#c2185b;stroke-width:1.6\"/><text x=\"335\" y=\"126.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Boucle infinie</text><rect x=\"20\" y=\"108\" width=\"200\" height=\"36\" rx=\"14\" style=\"fill:var(--card);stroke:#c2185b;stroke-width:1.6\"/><text x=\"120\" y=\"119.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">Oubli de modifier la</text><text x=\"120\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">variable</text><rect x=\"750\" y=\"30\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#2f5bea;stroke:#2f5bea;stroke-width:1.6\"/><text x=\"825\" y=\"47.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Syntaxe</text><rect x=\"940\" y=\"22\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"33.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">SyntaxError : deux-points</text><rect x=\"940\" y=\"50\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#2f5bea;stroke-width:1.6\"/><text x=\"1040\" y=\"61.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">IndentationError</text><rect x=\"750\" y=\"95\" width=\"150\" height=\"34\" rx=\"14\" style=\"fill:#1e9e5a;stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"825\" y=\"112.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"700\" style=\"fill:#ffffff\">Logique</text><rect x=\"940\" y=\"86\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"98.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">range : borne exclue</text><rect x=\"940\" y=\"114\" width=\"200\" height=\"23\" rx=\"11\" style=\"fill:var(--card);stroke:#1e9e5a;stroke-width:1.6\"/><text x=\"1040\" y=\"126.0\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10.5\"  style=\"fill:var(--tx)\">= au lieu de ==</text><rect x=\"470\" y=\"50\" width=\"220\" height=\"60\" rx=\"14\" style=\"fill:#1d2433;stroke:#1d2433;stroke-width:1.6\"/><text x=\"580\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"700\" style=\"fill:#ffffff\">Erreurs en Python</text></svg>"};
function coursH(c){const k=c.cours,m=MM[c.id]?`<div class="card"><h3>🧠 Carte mentale</h3><div class="mm">${MM[c.id]}</div></div>`:'';if(!k)return m;return m+`<div class="card"><h3>🎯 Objectifs du chapitre</h3><ul>${k.o.map(x=>`<li>${x}</li>`).join('')}</ul></div>`+k.b.map((b,i)=>`<div class="card"><h3>📘 ${i+1}. ${b[0]}</h3>${b[1]}</div>`).join('')}
function retH(c){const k=c.cours;return k?`<div class="card" style="border-left:5px solid var(--ok)"><h3>✅ À retenir</h3><ul>${k.r.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
const COURS={
dem:{o:['Citer les étapes de résolution d’un problème','Distinguer résultats, données et traitements','Construire le TDO et l’algorithme, puis valider par des jeux d’essai'],b:[
['Pourquoi une démarche ?','<p>Un architecte dessine un plan avant de construire. De même, un programmeur <b>réfléchit avant de coder</b>. Une démarche évite d’oublier des cas, de confondre ce qu’on a avec ce qu’on cherche, et permet de savoir <i>à quelle étape revenir</i> quand le programme est faux.</p>'],
['Vocabulaire','<ul><li><b>Donnée (entrée)</b> : information fournie à l’algorithme (ex. n).</li><li><b>Résultat (sortie)</b> : information que l’on veut obtenir (ex. la moyenne).</li><li><b>Traitement</b> : opérations qui transforment les données en résultats.</li><li><b>Algorithme</b> : suite finie et ordonnée d’instructions qui résout le problème.</li><li><b>TDO</b> : tableau qui déclare chaque objet (nom, type, rôle).</li></ul>'],
['Exemple pas à pas : périmètre et aire d’un rectangle','<pre>1) Énoncé : lire longueur L et largeur l, afficher périmètre et aire.\n2) Analyse : Résultats P, A | Données L, l | P = 2*(L+l) ; A = L*l\n3) TDO : L, l, P, A : Réel\n4) Algorithme : Lire(L, l) ; P ← 2*(L+l) ; A ← L*l ; Écrire(P, A)\n5) Python  : L = float(input()); l = float(input()); print(2*(L+l), L*l)\n6) Test : L=5, l=3 → P=16, A=15</pre>'],
['Erreurs fréquentes','<ul><li>Écrire le code sans analyser d’abord.</li><li>Oublier les cas limites (n = 0, tableau vide…).</li><li>Ne pas tester avec des valeurs dont on connaît le résultat.</li></ul>']],r:['Comprendre → analyser → décomposer (TDO) → algorithme → Python → tester.','Le résultat d’une étape sert d’entrée à la suivante.','Un test qui échoue renvoie à l’étape fautive.']},
sd:{o:['Distinguer constante et variable','Choisir le type adapté à une donnée','Utiliser opérateurs et fonctions prédéfinies, suivre l’évolution des variables'],b:[
['Objet, constante, variable','<p>Un <b>objet</b> est une « boîte » mémoire qui a un <b>nom</b>, un <b>type</b> et une <b>valeur</b>. Une <b>constante</b> garde sa valeur pendant tout l’algorithme ; une <b>variable</b> peut changer. Un nom (identificateur) commence par une lettre, ne contient ni espace ni accent, et ne doit pas être un mot réservé (ex. <code>Si</code>, <code>for</code>).</p>'],
['Les types de données','<p>Le type fixe les valeurs possibles et les opérations permises. Attention : <code>5</code> (entier), <code>5.0</code> (réel), <code>"5"</code> (chaîne) et <code>Vrai</code> (booléen) sont quatre objets différents ; <code>"5" + "3"</code> donne <code>"53"</code> alors que <code>5 + 3</code> donne <code>8</code>.</p>'],
['Opérateurs et priorités','<p>Ordre d’évaluation : parenthèses, puis <b>* / DIV MOD</b>, puis <b>+ −</b>, puis les comparaisons, puis <b>NON</b>, <b>ET</b>, <b>OU</b>.</p><pre>7 + 3 * 2 = 13        (7 + 3) * 2 = 20\n17 DIV 5 = 3          17 MOD 5 = 2      (17 = 5×3 + 2)\n(8 &gt; 3) ET (2 &gt; 5) = Faux</pre>'],
['Affectation, lecture, écriture','<p><code>x ← 5</code> range 5 dans x ; ce n’est <b>pas</b> une égalité mathématique. À droite, on calcule ; à gauche, on range. Exemple de trace :</p><pre>x ← 5      → x = 5\nx ← x + 1  → x = 6   (on lit l’ancienne valeur, on range la nouvelle)\ny ← x * 2  → y = 12</pre>']],r:['Tout objet est déclaré dans le TDO avec un type.','DIV et MOD s’appliquent aux entiers : a = b × (a DIV b) + (a MOD b).','« ← » est une affectation, pas une égalité.']},
syn:{o:['Lire et construire un organigramme','Traduire une structure en Python (indentation, deux-points)','Faire la trace d’une exécution'],b:[
['L’organigramme','<p>C’est une représentation graphique d’un algorithme. Chaque <b>symbole</b> a un rôle (ovale = début/fin, parallélogramme = lecture/écriture, rectangle = traitement, losange = test) et les <b>flèches</b> donnent l’ordre. Un losange a toujours <b>deux sorties</b> : Oui et Non.</p>'],
['Python : l’indentation fait la structure','<p>Après <code>if</code>, <code>else</code>, <code>elif</code>, <code>for</code>, <code>while</code> on met <b>deux-points</b>, et le bloc est <b>décalé de 4 espaces</b>. Une indentation fausse = programme faux.</p><pre>if x &lt; 0:\n    y = -x        # dans le bloc\nprint(y)          # hors du bloc</pre>'],
['Faire la trace d’une boucle Pour','<p>La <b>trace</b> est un tableau qui note les valeurs des variables à chaque tour. Exemple : S ← 0 ; Pour i de 1 à 4 faire S ← S + i</p><pre>tour | i | S\n  1  | 1 | 1\n  2  | 2 | 3\n  3  | 3 | 6\n  4  | 4 | 10</pre><p>Les animations ci-dessous suivent exactement ce principe.</p>']],r:['Un losange = une question, deux sorties.','Le bloc Python est défini par l’indentation.','La trace permet de vérifier un algorithme à la main.']},
cond:{o:['Écrire des conditions simples et composées','Choisir et écrire Si réduit, complet, généralisé','Éviter les erreurs de conditions'],b:[
['La condition','<p>C’est une expression dont la valeur est <b>Vrai</b> ou <b>Faux</b>. Elle utilise des opérateurs relationnels (=, ≠, &lt;, &gt;, ≤, ≥) et logiques (ET, OU, NON). Exemples : <code>n MOD 2 = 0</code> (n est pair) ; <code>(a &gt; 0) ET (b &gt; 0)</code>. Priorité : NON, puis ET, puis OU — utiliser des parenthèses en cas de doute.</p>'],
['Exemple détaillé : mention d’une note','<pre>Si note &lt; 10 alors mention ← "Ajourné"\nSinon Si note &lt; 14 alors mention ← "Passable à Assez bien"\nSinon mention ← "Bien ou plus"\nFin Si</pre><p>Pour note = 12 : 12 &lt; 10 est Faux → on teste 12 &lt; 14 : Vrai → mention = « Passable à Assez bien » ; les tests suivants sont ignorés. <b>Un seul bloc</b> est exécuté.</p>'],
['Conditions imbriquées ou composées ?','<p>Un Si peut contenir un autre Si (<b>imbriqué</b>) ou on regroupe les tests avec ET / OU (<b>composé</b>). Exemple : « 0 ≤ x ≤ 20 » s’écrit <code>(x ≥ 0) ET (x ≤ 20)</code>, et non <code>0 ≤ x ≤ 20</code> (en algorithmique).</p>'],
['Erreurs fréquentes','<ul><li>Confondre <code>=</code> (comparaison en algorithme) avec <code>==</code> (comparaison en Python) et <code>=</code> (affectation en Python).</li><li>Mettre les conditions dans le mauvais ordre : tester <code>note ≥ 10</code> avant <code>note ≥ 16</code> donne « passable » à toutes les bonnes notes.</li><li>Oublier les cas limites (égalité, zéro).</li></ul>']],r:['Condition = expression booléenne (Vrai / Faux).','Dans un Si généralisé, la première condition vraie l’emporte.','Tester les valeurs aux limites (ex. 9, 10, 11).']},
sel:{o:['Utiliser Selon pour plusieurs cas sur une même variable','Traduire Selon en Python','Choisir entre Selon et Si généralisé'],b:[
['Principe','<p><b>Selon</b> compare la valeur d’un <b>sélecteur</b> (variable ou expression de type entier, caractère ou chaîne) à des valeurs précises, puis exécute le bloc correspondant ; <b>Sinon</b> couvre toutes les autres valeurs.</p>'],
['Exemple détaillé : numéro de jour → nom','<pre>Selon j\n  1 : Écrire("Lundi")\n  2 : Écrire("Mardi")\n  6, 7 : Écrire("Week-end")\n  Sinon : Écrire("Numéro invalide")\nFin Selon</pre><p>Pour j = 7 : la valeur 7 figure dans la liste « 6, 7 » → on écrit « Week-end ». Pour j = 9 : aucune valeur ne correspond → bloc Sinon.</p>'],
['Selon ou Si généralisé ?','<p>Selon : valeurs <b>exactes</b> (jours, mois, opérateur +, −, ×, /). Si généralisé : <b>intervalles</b> ou conditions quelconques (notes, âges). En Python on utilise <code>if / elif / else</code> (ou <code>match</code> à partir de Python 3.10).</p>'],
['Pièges','<ul><li>Une même valeur dans deux cas.</li><li>Oublier le Sinon : une valeur imprévue passerait sans message.</li></ul>']],r:['Selon = choix selon la valeur exacte d’un sélecteur.','Toujours prévoir le cas Sinon.','Intervalles → Si généralisé.']},
iter:{o:['Reconnaître les ingrédients d’une boucle','Tracer une boucle Pour, Tant que, Répéter','Utiliser les schémas compteur, accumulateur, drapeau'],b:[
['Le vocabulaire de la boucle','<ul><li><b>Corps</b> : instructions répétées. <b>Itération</b> : un passage dans le corps.</li><li><b>Compteur</b> : variable qui compte les tours (i).</li><li><b>Condition d’arrêt</b> (Répéter) ou <b>de continuité</b> (Tant que).</li><li><b>Boucle infinie</b> : la condition ne change jamais — l’algorithme ne se termine pas.</li></ul>'],
['Trace : Tant que (nombre de chiffres de 345)','<pre>nb ← 0\nTant que n ≠ 0 faire n ← n DIV 10 ; nb ← nb + 1\n\ntour | n (avant) | n (après) | nb\n  1  |   345     |    34     | 1\n  2  |    34     |     3     | 2\n  3  |     3     |     0     | 3     → n = 0 : arrêt, 3 chiffres</pre>'],
['Trois schémas à connaître','<ul><li><b>Compteur</b> : <code>nb ← nb + 1</code> (compter les éléments qui vérifient une condition).</li><li><b>Accumulateur</b> : <code>S ← S + x</code> (somme, initialisée à 0) ou <code>P ← P * x</code> (produit, initialisé à 1).</li><li><b>Drapeau</b> : un booléen qui devient Faux (ou Vrai) dès qu’un cas est rencontré (ex. tableau trié ?).</li></ul>'],
['Exemple détaillé : produit P = n!','<pre>P ← 1\nPour i de 2 à n faire P ← P * i\nn = 4 : i=2 → P=2 ; i=3 → P=6 ; i=4 → P=24</pre><p>Initialiser P à <b>1</b> (élément neutre du produit) et non à 0.</p>']],r:['Initialiser avant la boucle, modifier dans la boucle.','Somme : départ 0 ; produit : départ 1.','Toute boucle doit pouvoir se terminer.']},
it:{o:['Utiliser la division entière pour décomposer un nombre','Appliquer l’algorithme d’Euclide','Tester la primalité et décomposer en facteurs premiers'],b:[
['Division euclidienne','<p>Pour a et b entiers (b ≠ 0) : <b>a = b × q + r</b> avec <b>q = a DIV b</b> et <b>r = a MOD b</b>, 0 ≤ r &lt; b. Exemple : 47 = 5×9 + 2 donc 47 DIV 5 = 9 et 47 MOD 5 = 2. Utile pour : parité (n MOD 2), chiffres d’un nombre (n MOD 10, n DIV 10), divisibilité (n MOD d = 0).</p>'],
['PGCD par la méthode d’Euclide','<p>Principe : PGCD(a, b) = PGCD(b, a MOD b). On s’arrête quand le reste est 0 : le PGCD est le dernier diviseur.</p><pre>PGCD(36, 24) : a=36, b=24 → r=12\n               a=24, b=12 → r=0\n               a=12, b=0  → PGCD = 12</pre>'],
['PPCM','<p>PPCM(a, b) = (a × b) DIV PGCD(a, b). Exemple : PPCM(4, 6) = 24 DIV 2 = 12.</p>'],
['Nombre premier et décomposition','<p>Un entier n ≥ 2 est <b>premier</b> s’il n’a que deux diviseurs : 1 et n. Il suffit de tester les diviseurs d tels que <b>d × d ≤ n</b> (racine carrée). Décomposition de 60 : 60÷2=30 ; 30÷2=15 ; 15÷3=5 ; 5÷5=1 → 60 = 2×2×3×5.</p>']],r:['a = b×q + r ; DIV donne q, MOD donne r.','Euclide : on remplace (a, b) par (b, a MOD b) jusqu’à b = 0.','Pour tester la primalité, d × d ≤ n suffit.']},
mod:{o:['Décomposer un problème en modules','Distinguer fonction et procédure, paramètres formels et effectifs','Distinguer portée locale et globale'],b:[
['Pourquoi des modules ?','<p>Un gros problème se découpe en <b>sous-problèmes</b> plus simples, chacun résolu par un <b>module</b>. Avantages : algorithme plus lisible, module testé séparément et <b>réutilisable</b>, travail partagé.</p>'],
['Fonction ou procédure ?','<ul><li><b>Fonction</b> : calcule et <b>retourne un résultat</b> (un seul) ; on l’utilise dans une expression : <code>y ← Carre(5)</code>.</li><li><b>Procédure</b> : réalise une action (affichage…) sans résultat unique ; on l’appelle : <code>Etoiles(5)</code>.</li></ul><p>Les <b>paramètres formels</b> sont dans l’en-tête (<code>Carre(x)</code>), les <b>paramètres effectifs</b> sont les valeurs de l’appel (<code>Carre(5)</code>). Ils doivent correspondre en nombre, ordre et type.</p>'],
['Portée des objets','<p>Une variable <b>locale</b> n’existe que dans son module ; une variable <b>globale</b> est connue de tout le programme. On préfère les paramètres aux variables globales : le module est alors indépendant.</p>'],
['Exemple détaillé','<pre>Fonction Premier(n : Entier) : Booléen   // module 1\nProcédure Afficher_premiers(max : Entier) // module 2\n  Pour i de 2 à max faire\n    Si Premier(i) alors Écrire(i)\n  Fin Pour\nAlgorithme Principal : Lire(m) ; Afficher_premiers(m)</pre><p>Chaque module a un rôle unique ; le principal se contente d’appeler.</p>']],r:['Fonction : retourne une valeur ; procédure : fait une action.','Paramètres formels (déclaration) / effectifs (appel).','Préférer variables locales et paramètres.']},
ch:{o:['Manipuler les caractères d’une chaîne par leur indice','Utiliser les fonctions prédéfinies sur les chaînes','Parcourir une chaîne avec une boucle'],b:[
['La chaîne de caractères','<p>Une chaîne est une suite de caractères <b>numérotés à partir de 0</b>. Pour <code>ch = "informatique"</code> : Long(ch) = 12, ch[0] = "i", ch[11] = "e" (dernier indice = Long − 1). Accéder à ch[12] est une <b>erreur</b> (indice hors limites).</p>'],
['Les fonctions sur les chaînes','<pre>Long("algo")                    = 4\nPos("mat", "informatique")      = 5   (début de "mat")\nSous_chaine("informatique",2,6) = "form" (positions 2 à 5)\nEffacer("informatique",0,2)     → "formatique"\n"ab" + "cd"                    = "abcd" (concaténation)\nEstnum("123") = Vrai    Valeur("123") = 123    Convch(45) = "45"</pre><p>Dans Sous_chaine et Effacer, la position finale est <b>exclue</b>.</p>'],
['Parcourir une chaîne : exemple','<pre>nb ← 0\nPour i de 0 à Long(ch)-1 faire\n  Si ch[i] = "a" alors nb ← nb + 1\nFin Pour\nch = "banane" → a aux positions 1 et 3 → nb = 2</pre>'],
['Pièges','<ul><li>Oublier que le premier indice est 0.</li><li>En Python une chaîne est <b>non modifiable</b> : <code>ch[0] = "x"</code> est une erreur ; on reconstruit une nouvelle chaîne.</li><li>Comparer "a" et "A" : ce sont deux caractères différents.</li></ul>']],r:['Indices de 0 à Long − 1.','Sous_chaine(ch, d, f) : f exclu.','Parcours : Pour i de 0 à Long(ch) − 1.']},
tab:{o:['Déclarer et parcourir un tableau à une dimension','Calculer somme, minimum, maximum','Utiliser un tableau à deux dimensions avec numpy'],b:[
['Pourquoi un tableau ?','<p>Pour stocker 30 notes, il serait absurde de créer 30 variables. Un <b>tableau</b> regroupe plusieurs éléments <b>de même type</b> sous un seul nom ; chaque élément est repéré par son <b>indice</b> (0 à n−1). Déclaration dans le TDO : <code>T : Tableau de 30 Réels</code>.</p>'],
['Les trois parcours de base','<pre>Remplir  : Pour i de 0 à n-1 faire Lire(T[i])\nAfficher : Pour i de 0 à n-1 faire Écrire(T[i])\nSomme    : S ← 0 ; Pour i de 0 à n-1 faire S ← S + T[i]\n\nT = [4, 9, 1, 7]  → S = 4+9+1+7 = 21 ;  moyenne = 21/4 = 5,25</pre>'],
['Minimum et maximum','<p>Initialiser maxi avec <b>T[0]</b> (et non 0 : si toutes les valeurs sont négatives, 0 serait faux), puis comparer chaque T[i]. Exemple T = [4, 9, 1, 7] : maxi 4 → 9 ; mini 4 → 1.</p>'],
['Tableau à deux dimensions','<p>M[i][j] désigne la case de la <b>ligne i</b> et de la <b>colonne j</b>. Le parcours demande deux boucles imbriquées (lignes, puis colonnes).</p><pre>import numpy as np\nM = np.array([[1, 2, 3], [4, 5, 6]])   # 2 lignes, 3 colonnes\nM[1][2] = 6     M.shape = (2, 3)     M.sum() = 21</pre><p><code>array</code> (module standard) : 1D, un seul type ; <code>numpy</code> : 1D et 2D, calculs rapides.</p>']],r:['Indice du premier élément : 0 ; du dernier : n − 1.','Min / max : partir de T[0].','Tableau 2D : M[ligne][colonne], deux boucles imbriquées.']},
rech:{o:['Expliquer les recherches séquentielle et dichotomique','Dérouler chaque algorithme sur un exemple','Comparer le nombre de comparaisons'],b:[
['Recherche séquentielle','<p>On parcourt le tableau du début vers la fin et on s’arrête dès que x est trouvé. Exemple T = [12, 5, 9, 31, 7], x = 9 : T[0]=12 ≠ 9 ; T[1]=5 ≠ 9 ; T[2]=9 → <b>trouvé à l’indice 2</b> (3 comparaisons). Si x est absent : n comparaisons. Fonctionne sur tout tableau.</p>'],
['Recherche dichotomique','<p><b>Condition : tableau trié.</b> On compare x au <b>milieu</b> et on élimine la moitié inutile. Exemple T = [3, 7, 9, 12, 31], x = 12 :</p><pre>g=0, d=4 → m=2 : T[2]=9  &lt; 12 → g=3\ng=3, d=4 → m=3 : T[3]=12 = 12 → trouvé (indice 3)</pre>'],
['Comparaison','<p>Pour n = 1000 éléments triés, la séquentielle peut faire 1000 comparaisons, la dichotomique <b>au plus 10</b> (car 2¹⁰ = 1024). Mais la dichotomique oblige à trier d’abord.</p>'],
['Maximum et minimum','<p>Parcours unique avec deux variables maxi et mini initialisées à T[0]. Piège : initialiser à 0.</p>']],r:['Séquentielle : tout tableau, ≤ n comparaisons.','Dichotomique : tableau trié, environ log₂(n) comparaisons.','Une recherche s’arrête dès que la réponse est connue.']},
tri:{o:['Expliquer le principe des tris par sélection, à bulles et par insertion','Dérouler chaque tri sur le même tableau','Comparer les trois méthodes'],b:[
['Pourquoi trier ?','<p>Un tableau trié se lit, se compare et se <b>recherche</b> beaucoup plus vite (recherche dichotomique). Trier par ordre croissant : T[0] ≤ T[1] ≤ … ≤ T[n−1].</p>'],
['Tri par sélection — T = [5, 2, 4, 1]','<p>Principe : chercher le <b>minimum</b> de la partie non triée et le placer en tête.</p><pre>i=0 : min = 1 (indice 3) → échange → [1, 2, 4, 5]\ni=1 : min = 2 (déjà en place)\ni=2 : min = 4 (déjà en place)  → trié</pre>'],
['Tri à bulles — T = [5, 2, 4, 1]','<p>Principe : comparer les voisins et les échanger s’ils sont mal ordonnés ; le plus grand « monte » en fin de tableau à chaque passe.</p><pre>passe 1 : [2,5,4,1] → [2,4,5,1] → [2,4,1,5]\npasse 2 : [2,4,1,5] → [2,1,4,5]\npasse 3 : [2,1,4,5] → [1,2,4,5]  → trié</pre>'],
['Tri par insertion — T = [5, 2, 4, 1]','<p>Principe : comme trier des cartes en main : on insère chaque élément à sa place dans la partie déjà triée.</p><pre>cle=2 : [2,5,4,1]\ncle=4 : [2,4,5,1]\ncle=1 : [1,2,4,5]</pre>'],
['Comparer','<table><tr><th>Tri</th><th>Idée</th><th>Particularité</th></tr><tr><td>Sélection</td><td>chercher le minimum</td><td>au plus n−1 échanges</td></tr><tr><td>Bulles</td><td>échanger les voisins</td><td>simple, nombreux échanges</td></tr><tr><td>Insertion</td><td>insérer dans la partie triée</td><td>rapide si le tableau est presque trié</td></tr></table><p>Pour de petits tableaux, les trois conviennent ; leur nombre de comparaisons croît comme n².</p>']],r:['Sélection : minimum ; bulles : voisins ; insertion : cartes.','Utiliser les animations pour vérifier à la main.','Trier d’abord permet la recherche dichotomique.']}
};
const AN={tri:['sel','bul','ins'],rech:['seq','dic','mm'],it:[null,'pgcd','prem'],iter:['som','chif','rep']};
const MORE={
dem:['Convertir une durée en secondes en heures, minutes et secondes. Appliquer la démarche.',`Analyse : résultats h, m, s (Entier) ; donnée d (Entier ≥ 0) ; traitements h = d DIV 3600 ; m = (d MOD 3600) DIV 60 ; s = d MOD 60.
TDO : d, h, m, s : Entier
Algorithme : Lire(d) ; h ← d DIV 3600 ; m ← (d MOD 3600) DIV 60 ; s ← d MOD 60 ; Écrire(h, m, s)
Python : h = d // 3600 ; m = d % 3600 // 60 ; s = d % 60
Test : 3725 → 1 h 2 min 5 s ; 59 → 0 h 0 min 59 s`],
sd:['Lire le rayon r d’un cercle et afficher son périmètre et son aire. Donner le TDO.',`TDO : PI constante = 3.14159 ; r, P, A : Réel
Début
  Lire(r)
  P ← 2 * PI * r
  A ← PI * r * r
  Écrire(P, A)
Fin
# Python : import math ; P = 2*math.pi*r ; A = math.pi*r**2`,'Échanger les valeurs de deux variables a et b.',`TDO : a, b, aux : Entier
aux ← a
a ← b
b ← aux
# Python : a, b = b, a
Test : a=3, b=8 → a=8, b=3`],
cond:['Lire trois entiers et afficher le plus grand.',`maxi ← a
Si b > maxi alors maxi ← b Fin Si
Si c > maxi alors maxi ← c Fin Si
Écrire(maxi)
# Python : print(max(a, b, c))
Test : 4, 9, 2 → 9`,'Lire trois longueurs a, b, c : dire si elles forment un triangle, puis son type (équilatéral, isocèle, quelconque).',`Si (a < b + c) ET (b < a + c) ET (c < a + b) alors
  Si (a = b) ET (b = c) alors Écrire("équilatéral")
  Sinon Si (a = b) OU (b = c) OU (a = c) alors Écrire("isocèle")
  Sinon Écrire("quelconque")
  Fin Si
Sinon Écrire("pas un triangle")
Fin Si
Tests : 3,3,3 → équilatéral ; 3,3,5 → isocèle ; 3,4,5 → quelconque ; 1,2,5 → pas un triangle`,'Résoudre ax² + bx + c = 0 (a ≠ 0).',`delta ← b*b - 4*a*c
Si delta < 0 alors Écrire("pas de solution réelle")
Sinon Si delta = 0 alors Écrire(-b / (2*a))
Sinon
  x1 ← (-b - Racine_carrée(delta)) / (2*a)
  x2 ← (-b + Racine_carrée(delta)) / (2*a)
  Écrire(x1, x2)
Fin Si
# Python : math.sqrt(delta)
Tests : (1,-3,2) → 1 et 2 ; (1,2,1) → -1 ; (1,0,1) → aucune`,'Prix d’un billet : moins de 12 ans : 5 DT ; de 12 à 60 ans : 10 DT ; plus de 60 ans : 6 DT. Afficher le prix selon l’âge.',`Si age < 12 alors prix ← 5
Sinon Si age ≤ 60 alors prix ← 10
Sinon prix ← 6
Fin Si
Tests : 8 → 5 ; 12 → 10 ; 60 → 10 ; 61 → 6`],
sel:['Calculatrice : lire deux réels a, b et un opérateur op (+, -, *, /) et afficher le résultat.',`Selon op
  "+" : r ← a + b
  "-" : r ← a - b
  "*" : r ← a * b
  "/" : Si b ≠ 0 alors r ← a / b
        Sinon Écrire("division par 0")
  Sinon : Écrire("opérateur invalide")
Fin Selon
# Python : if op == "+": ... elif op == "-": ... (ou match op:)`,'Afficher le nombre de jours d’un mois m (1 à 12), février = 28.',`Selon m
  1, 3, 5, 7, 8, 10, 12 : j ← 31
  4, 6, 9, 11 : j ← 30
  2 : j ← 28
  Sinon : j ← 0   // mois invalide
Fin Selon
# Python : if m in (1,3,5,7,8,10,12): j = 31 ...`],
iter:['Afficher la table de multiplication d’un entier n (de 1 à 10).',`Pour i de 1 à 10 faire
  Écrire(n, " x ", i, " = ", n * i)
Fin Pour
# Python : for i in range(1, 11): print(n, "x", i, "=", n*i)`,'Calculer n! (n ≥ 0).',`f ← 1
Pour i de 2 à n faire
  f ← f * i
Fin Pour
Écrire(f)
Tests : 5 → 120 ; 0 → 1 (la boucle ne s’exécute pas)`,'Lire des entiers jusqu’à la saisie de 0 et afficher leur somme.',`S ← 0
Répéter
  Lire(x)
  S ← S + x
Jusqu'à x = 0
Écrire(S)
# Python : while True: x = int(input()); S += x; if x == 0: break
Test : 4, 6, 0 → 10`,'Afficher les n premiers termes de la suite de Fibonacci.',`u ← 0 ; v ← 1
Pour i de 1 à n faire
  Écrire(u)
  w ← u + v
  u ← v
  v ← w
Fin Pour
Test : n = 7 → 0 1 1 2 3 5 8`],
it:['Calculer le PPCM de deux entiers a et b.',`PPCM ← (a * b) DIV Pgcd(a, b)     // Pgcd : fonction d’Euclide
# Python : a * b // math.gcd(a, b)
Tests : (4, 6) → 12 ; (7, 5) → 35`],
mod:['Écrire la fonction EstPair(n) : Booléen puis une procédure qui affiche les nombres pairs de 1 à n.',`Fonction EstPair(n : Entier) : Booléen
Début
  EstPair ← (n MOD 2 = 0)
Fin
Procédure Pairs(n : Entier)
Début
  Pour i de 1 à n faire
    Si EstPair(i) alors Écrire(i)
  Fin Pour
Fin
# Python : def est_pair(n): return n % 2 == 0`,'Écrire la fonction Puissance(a, n) qui calcule aⁿ sans utiliser **.',`Fonction Puissance(a, n : Entier) : Entier
Début
  r ← 1
  Pour i de 1 à n faire r ← r * a
  Puissance ← r
Fin
Tests : (2, 5) → 32 ; (7, 0) → 1`],
ch:['Compter le nombre de mots d’une phrase (mots séparés par un seul espace).',`nb ← 1
Pour i de 0 à Long(ch)-1 faire
  Si ch[i] = " " alors nb ← nb + 1
Fin Pour
# Python : len(ch.split())
Test : "j aime python" → 3`,'Inverser une chaîne.',`r ← ""
Pour i de Long(ch)-1 à 0 (pas -1) faire
  r ← r + ch[i]
Fin Pour
# Python : r = ch[::-1]   ou   for i in range(len(ch)-1, -1, -1)
Test : "algo" → "ogla"`],
tab:['Inverser l’ordre des éléments d’un tableau T de n éléments (sans second tableau).',`Pour i de 0 à (n DIV 2) - 1 faire
  aux ← T[i]
  T[i] ← T[n-1-i]
  T[n-1-i] ← aux
Fin Pour
Test : [1,2,3,4,5] → [5,4,3,2,1]
# numpy : T = T[::-1]`,'Calculer la somme de chaque ligne d’une matrice M de 3 lignes et 3 colonnes.',`Pour i de 0 à 2 faire
  S ← 0
  Pour j de 0 à 2 faire S ← S + M[i][j]
  Écrire("ligne ", i, " : ", S)
Fin Pour
# numpy : M.sum(axis=1)
Test : [[1,2,3],[4,5,6],[7,8,9]] → 6, 15, 24`],
rech:['Trouver l’indice de la plus petite valeur d’un tableau T.',`pm ← 0
Pour i de 1 à n-1 faire
  Si T[i] < T[pm] alors pm ← i
Fin Pour
Écrire(pm)
# numpy : T.argmin()
Test : [8, 3, 9, 3] → 1 (première occurrence)`,'Vérifier si un tableau T est trié par ordre croissant.',`trie ← Vrai ; i ← 0
Tant que (i < n-1) ET (trie) faire
  Si T[i] > T[i+1] alors trie ← Faux
  i ← i + 1
Fin Tant que
Écrire(trie)
Tests : [1,3,5] → Vrai ; [1,5,3] → Faux`],
tri:['Compter le nombre d’échanges effectués par le tri à bulles sur [3, 1, 2].',`Passe 1 : (3,1) échange → [1,3,2] ; (3,2) échange → [1,2,3]
Passe 2 : (1,2) pas d’échange
Total : 2 échanges.
# Python : ajouter un compteur ech += 1 à chaque échange`,'Trier par ordre alphabétique la liste de noms [Sami, Amal, Karim] (tri par sélection).',`Même algorithme que pour les nombres ; la comparaison T[j] < T[pm] fonctionne sur les chaînes (ordre alphabétique).
Résultat : [Amal, Karim, Sami]
# Python : noms = ["Sami","Amal","Karim"] ; même code que tri_selection(noms)`]
};
C.forEach(c=>{Object.assign(c,EXQ[c.id]||{});c.ex=(c.ex||[]).concat(MORE[c.id]||[]);c.cours=COURS[c.id];if(c.id==='tab')c.html2=GRIDH;if(c.add)c.S=c.S.concat(c.add);(AN[c.id]||[]).forEach((a,i)=>{if(a&&c.S[i])c.S[i].an=a})});
C.sort((a,b)=>ORD.indexOf(a.id)-ORD.indexOf(b.id));C.forEach((c,i)=>c.t=(i+1)+'. '+c.t.replace(/^\d+\. /,''));
function score(b){const p=b.parentNode;let s=0,n=0;p.querySelectorAll('.q').forEach(q=>{n++;const r=q.querySelector('input:checked'),ok=r&&r.value==q.dataset.a;if(ok)s++;q.querySelector('span').textContent=ok?' ✔':' ✘ (réponse : '+q.querySelectorAll('label')[q.dataset.a].textContent.trim()+')'});p.querySelector('.sc').textContent='Score : '+s+'/'+n;saveQ(s,n)}
function runAnim(al){const a=$('#anim');if(!a)return;$('#alg').value=al;$('#go').click();a.scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#pl').click(),450)}
function demo(){const f=()=>{const a=Math.trunc(+$('#da').value),b=Math.trunc(+$('#db').value)||1;$('#dout').textContent=`a DIV b = ${Math.trunc(a/b)}   (Python : a // b)\na MOD b = ${a%b}   (Python : a % b)\na / b   = ${a/b}   (réel)\n(a > b) ET (b > 0) = ${a>b&&b>0}`};$('#da').oninput=$('#db').oninput=f;f()}
const $=s=>document.querySelector(s);

function build(c){
 let h=`<h2>${c.t}</h2><div class="card"><p>${c.intro}</p></div>`;
 h+=coursH(c);if(c.html)h+=c.html;if(c.anim)h+=`<div class="card" id="anim"></div>`;
 c.S.forEach(x=>{h+=secH(x)});
 if(c.html2)h+=c.html2;h+=retH(c);
 if(c.ex){let e='';for(let i=0;i<c.ex.length;i+=2)e+=`<h4>Exercice ${i/2+1}</h4><p>${c.ex[i]}</p><details><summary>Voir la correction</summary><pre>${esc(c.ex[i+1])}</pre></details><p class="elv">🔒 Correction réservée au mode professeur.</p>`;h+=`<div class="card"><h3>Série d’exercices corrigés</h3>${e}</div>`}
 if(c.q)h+=`<div class="card"><h3>Quiz</h3>${c.q.map((q,i)=>`<div class="q" data-a="${q[2]}"><b>${i+1}. ${q[0]}</b>${q[1].map((o,j)=>`<label><input type="radio" name="q${c.id}${i}" value="${j}"> ${o}</label>`).join('')}<span></span></div>`).join('')}<button class="btn s" onclick="score(this)">Corriger le quiz</button> <b class="sc"></b></div>`;
 $('#main').innerHTML=h;if(c.id==='sd')demo();if(c.id==='syn')synInit();if(c.id==='cond'||c.id==='iter')dt(c.id,[]);if(c.id==='act')actInit();if(c.id==='tab')gridInit();
 if(c.anim)setupAnim(c.anim);
}
const TH={
dem:['#2f5bea','#e8890c','#2f5bea','#7b3fe4','🧭','Les 6 étapes pour résoudre un problème',0],
sd:['#0f8a6a','#e8890c','#0f8a6a','#1565c0','🧱','Constantes, variables, types, opérateurs, fonctions',1],
syn:['#c2185b','#ff9800','#c2185b','#6a1b9a','🔀','Organigrammes animés : Si, Pour, Tant que, Répéter',2],
cond:['#d35400','#2f5bea','#d35400','#b03a2e','❓','Si alors, Sinon, Selon : pourquoi, quand, comment choisir',0],
sel:['#6a1b9a','#00acc1','#6a1b9a','#283593','🎛️','La structure à choix multiple',1],
iter:['#1565c0','#e91e63','#1565c0','#00838f','🔁','Pour, Répéter jusqu’à, Tant que : pourquoi, quand, comment choisir',2],
it:['#00796b','#f57c00','#00796b','#2e7d32','🧮','PGCD, PPCM, nombres premiers, décomposition',0],
mod:['#5e35b1','#ff7043','#5e35b1','#3949ab','🧩','Fonctions, procédures, paramètres, portée',1],
ch:['#ad1457','#00897b','#ad1457','#ef6c00','🔤','Les fonctions sur les chaînes de caractères',2],
tab:['#00695c','#ffa000','#00695c','#0277bd','📊','Tableaux 1D et 2D avec array et numpy',0],
rech:['#ef6c00','#3949ab','#ef6c00','#c62828','🔎','Séquentielle, dichotomique, maximum / minimum',1],
tri:['#37474f','#43a047','#37474f','#1b5e20','📶','Sélection, bulles, insertion : animations',2],
synt:['#8e24aa','#fb8c00','#8e24aa','#d81b60','🏆','Exercices de synthèse par niveau',0],
act:['#0288d1','#e53935','#0288d1','#00acc1','🎮','Trace à compléter, trous, devine l’étape',1],
proj:['#2e7d32','#8e24aa','#2e7d32','#00838f','🚀','Mini-projets de fin de période',2],
err:['#c62828','#1565c0','#c62828','#ef6c00','🐞','Erreurs fréquentes en Python',0],
eval:['#455a64','#ff6f00','#455a64','#263238','📝','Devoirs de contrôle et de synthèse corrigés',1],
ser1:['#7b1fa2','#ffa000','#7b1fa2','#3949ab','1️⃣','Bases, conditions et Selon : exercices corrigés',2],
ser2:['#00838f','#e64a19','#00838f','#2e7d32','2️⃣','Boucles et chaînes : exercices corrigés',0],
ser3:['#ef6c00','#1565c0','#ef6c00','#ad1457','3️⃣','Tableaux, recherches, modules : exercices corrigés',1],
lib:['#37474f','#00acc1','#37474f','#5e35b1','📚','32 procédures et fonctions : TDO, algorithme, Python',2]};
const pg=i=>String(i+1).padStart(2,'0')+'-'+C[i].id+'.html';
function theme(id){const t=TH[id],lt=h=>{const n=parseInt(h.slice(1),16),m=v=>Math.round(v+(255-v)*.4);return '#'+[n>>16&255,n>>8&255,n&255].map(m).map(v=>v.toString(16).padStart(2,'0')).join('')};
 const hs=[`linear-gradient(120deg,${t[2]},${t[3]})`,`radial-gradient(circle at 20% 20%,${t[3]},${t[2]})`,`repeating-linear-gradient(135deg,${t[2]},${t[2]} 16px,${t[3]} 16px,${t[3]} 32px)`][t[6]];
 const st=document.createElement('style');st.textContent=`:root{--pr:${t[0]};--ac:${t[1]};--hbg:${hs}}@media(prefers-color-scheme:dark){:root{--pr:${lt(t[0])}}}html[data-t=dark]{--pr:${lt(t[0])}}html[data-t=light]{--pr:${t[0]}}`;document.head.appendChild(st);return t}
const ID='Cours proposé par <b>Elabed Elmouldi</b> · Classe 3 Sc · A.S. 2026/2027';
function boot(id){const i=C.findIndex(c=>c.id===id),c=C[i],T=theme(id);document.title=c.t+' – Cours 3 Sc';
 $('#hd').innerHTML=`<div class="big">${T[4]}</div><h1>${esc(c.t.replace(/^\d+\. /,''))}</h1><p>${T[5]}</p><p class="id">Chapitre ${i+1}/${C.length} · ${ID}</p>`;
 $('#nav').innerHTML=`<a class="nb" href="index.html">🏠 Index</a>${i>0?`<a class="nb" href="${pg(i-1)}" title="${esc(C[i-1].t)}">◀ Précédent</a>`:''}${i<C.length-1?`<a class="nb" href="${pg(i+1)}" title="${esc(C[i+1].t)}">Suivant ▶</a>`:''}<a class="nb" target="_blank" rel="noopener" href="${EDI}">▶ Éditeur Python</a>`;
 build(c)}
function indexPage(){document.title='Algorithmique et programmation – 3 Sc';
 $('#hd').innerHTML=`<div class="big">🐍</div><h1>Algorithmique et programmation Python</h1><p>3ème année – Mathématiques, Sciences expérimentales, Sciences techniques · Aide pédagogique Sept. 2026</p><p class="id">${ID}</p>`;
 $('#nav').innerHTML=`<a class="nb" target="_blank" rel="noopener" href="${EDI}">▶ Éditeur Python en ligne</a>`;
 $('#main').innerHTML='<div class="card hero"><img src="assets/img/couverture.jpg" alt="Couverture du cours"><div><h3>Bienvenue</h3><p>Ce cours couvre le programme d’informatique de la 3ème année : démarche de résolution, structures de données, conditionnels, itératifs, chaînes, tableaux, modules, recherches et tris. Chaque chapitre propose cours, animations, exercices corrigés et quiz.</p></div></div><h2>Sommaire des cours</h2><div class="grid">'+C.map((c,i)=>{const T=TH[c.id];return `<a class="gc" style="--c:${T[0]};--c2:${T[3]};animation-delay:${i*.05}s" href="${pg(i)}"><span class="gi">${T[4]}</span><b>${esc(c.t)}</b><small>${T[5]}</small><em>${c.ex?c.ex.length/2:0} exercices corrigés · ${c.q?c.q.length:0} questions${(c.anim||c.S.some(s=>s.an)||c.id==='syn')?' · 🎬 animations':''}</em></a>`}).join('')+'</div><div class="card"><h3>🧠 Carte mentale du cours</h3><a href="assets/img/carte-mentale.jpg" target="_blank"><img class="inf" src="assets/img/carte-mentale.jpg" alt="Carte mentale du cours"></a><p style="font-size:.8rem">Cliquer pour agrandir. Une carte mentale détaillée est aussi proposée au début de chaque chapitre.</p></div><div class="card"><h3>📥 Ressources à télécharger</h3><ul><li><a href="ressources/livret_eleve_3sc.pdf" target="_blank">Livret de l’élève (PDF, sans corrigés)</a></li><li><a href="ressources/fiches_revision_3sc.pdf" target="_blank">Fiches de révision (PDF, 1 page par chapitre)</a></li><li><a href="ressources/fiches_TP_eleve_3sc.pdf" target="_blank">Fiches de TP (PDF, élève)</a></li></ul></div><div class="card"><h3>Comment utiliser ce cours</h3><p>Chaque chapitre est une page indépendante : suivez l’ordre proposé ou choisissez un chapitre. Dans chaque page : cours, TDO, algorithme, code Python, animations, exercices corrigés et quiz. Le bouton « Éditeur Python » ouvre un éditeur en ligne (Internet requis) ; tout le reste fonctionne hors ligne.</p></div>'}
/* ===== Animations ===== */
let steps=[],k=0,timer=null;
function stop(){clearInterval(timer);timer=null}
function seqSteps(a,x){const S=[],n=a.length;let i=0;
 S.push({a,h:{},v:{x,n,i:'?'},m:`On cherche x = ${x}. Initialisation : i ← 0`});
 while(true){
  S.push({a,h:{[i<n?i:0]:i<n?'cur':''},v:{x,n,i,'i<n':i<n,'T[i]':i<n?a[i]:'—'},m:i<n?`Condition (i < n) ET (T[i] ≠ x) : T[${i}] = ${a[i]} ${a[i]!==x?'≠':'='} ${x}`:'i = n : tableau épuisé'});
  if(i>=n||a[i]===x)break;i++;
 }
 const f=i<n;S.push({a,h:f?{[i]:'ok'}:{},v:{x,n,i,trouve:f},m:f?`✔ Trouvé à l’indice ${i}`:'✘ Valeur absente du tableau'});return S}
function sortSteps(kind,a0){const a=[...a0],n=a.length,S=[];const ok=new Set();
 const P=(h,v,m)=>{const hh={};ok.forEach(i=>hh[i]='ok');Object.assign(hh,h);S.push({a:[...a],h:hh,v,m})};
 if(kind==='sel'){for(let i=0;i<n-1;i++){let pm=i;P({[i]:'cur'},{i,pm,j:'—'},`i=${i} : on suppose que le minimum est T[${i}]=${a[i]}`);
   for(let j=i+1;j<n;j++){P({[pm]:'min',[j]:'cur'},{i,j,pm,'T[j]':a[j],'T[pm]':a[pm]},`Compare T[${j}]=${a[j]} avec T[pm]=${a[pm]} → ${a[j]<a[pm]?'plus petit : pm ← '+j:'on garde pm'}`);if(a[j]<a[pm])pm=j}
   if(pm!==i){const aux=a[i];a[i]=a[pm];a[pm]=aux;P({[i]:'cur',[pm]:'min'},{i,pm,aux},`Échange T[${i}] et T[${pm}]`)}
   ok.add(i)}ok.add(n-1)}
 else if(kind==='bul'){for(let i=n-1;i>=1;i--){for(let j=0;j<i;j++){const sw=a[j]>a[j+1];P({[j]:'cur',[j+1]:'cur'},{i,j,'T[j]':a[j],'T[j+1]':a[j+1]},`Compare T[${j}]=${a[j]} et T[${j+1}]=${a[j+1]} → ${sw?'échange':'rien'}`);
   if(sw){const aux=a[j];a[j]=a[j+1];a[j+1]=aux;P({[j]:'min',[j+1]:'min'},{i,j,aux},'Échange effectué')}}ok.add(i)}ok.add(0)}
 else{ok.add(0);for(let i=1;i<n;i++){const cle=a[i];let j=i-1;P({[i]:'key'},{i,cle,j},`cle ← T[${i}] = ${cle}`);
   while(j>=0&&a[j]>cle){a[j+1]=a[j];P({[j]:'cur',[j+1]:'key'},{i,cle,j,'T[j]':a[j]},`T[${j}]=${a[j]} > ${cle} : décalage vers la droite`);j--}
   a[j+1]=cle;ok.add(i);for(let q=0;q<=i;q++)ok.add(q);P({[j+1]:'key'},{i,cle,j:j+1},`T[${j+1}] ← ${cle} (insertion)`)}}
 for(let i=0;i<n;i++)ok.add(i);P({},{},'✔ Tableau trié');return S}
function minmaxSteps(a){const S=[],n=a.length;let mx=a[0],mi=a[0],pm=0,pn=0;
 S.push({a,h:{0:'cur'},v:{maxi:mx,mini:mi,i:0},m:'Initialisation : maxi ← T[0], mini ← T[0]'});
 for(let i=1;i<n;i++){const h={[pm]:'min',[pn]:'key'};h[i]='cur';let m=`Compare T[${i}]=${a[i]}`;
  if(a[i]>mx){mx=a[i];pm=i;m+=` > maxi → maxi ← ${mx}`}else if(a[i]<mi){mi=a[i];pn=i;m+=` < mini → mini ← ${mi}`}else m+=' : ni nouveau max ni nouveau min';
  S.push({a,h,v:{i,'T[i]':a[i],maxi:mx,mini:mi},m})}
 S.push({a,h:{[pm]:'min',[pn]:'key'},v:{maxi:mx,mini:mi},m:`✔ Maximum = ${mx} (rouge), minimum = ${mi} (violet)`});return S}
function dichoSteps(a,x){a=[...a].sort((p,q)=>p-q);const S=[],n=a.length;let g=0,d=n-1,t=false,m=0;
 const rng=(g,d,m)=>{const h={};for(let i=0;i<n;i++)h[i]=(i<g||i>d)?'out':'';if(m!=null)h[m]='min';return h};
 S.push({a,h:rng(g,d),v:{x,g,d},m:`Tableau trié. Cherche x = ${x} : g ← 0, d ← ${d}`});
 while(g<=d&&!t){m=Math.floor((g+d)/2);const c=a[m]===x?'= x → trouvé':a[m]<x?'< x → g ← m+1':'> x → d ← m-1';
  S.push({a,h:rng(g,d,m),v:{x,g,d,m,'T[m]':a[m]},m:`m = (g+d) DIV 2 = ${m} ; T[m] = ${a[m]} ${c}`});
  if(a[m]===x)t=true;else if(a[m]<x)g=m+1;else d=m-1}
 S.push({a,h:t?{[m]:'ok'}:rng(1,0),v:{x,g,d,trouve:t},m:t?`✔ Trouvé à l’indice ${m}`:'✘ g > d : valeur absente'});return S}
function iterSteps(k,a,b){const S=[];const P=(v,m)=>S.push({a:[],h:{},v,m});
 if(k==='som'){a=Math.min(a,15);let Sm=0;P({n:a,i:'?',S:0},'Initialisation : S ← 0');for(let i=1;i<=a;i++){Sm+=i;P({n:a,i,S:Sm},`Pour i = ${i} : S ← S + ${i} = ${Sm}`)}P({n:a,S:Sm},`Fin de Pour → S = ${Sm}`)}
 else if(k==='chif'){let n=a,nb=0;P({n,nb},'nb ← 0');while(n!==0){P({n,nb,'n≠0':true},`n = ${n} ≠ 0 → on entre dans la boucle`);n=Math.trunc(n/10);nb++;P({n,nb},`n ← n DIV 10 = ${n} ; nb ← ${nb}`)}P({n,nb,'n≠0':false},`n = 0 → fin : ${nb} chiffre(s)`)}
 else if(k==='rep'){let p=1;P({a,p},'p ← 1');do{p*=2;P({a,p,'p≥a':p>=a},`p ← p*2 = ${p} ; arrêt si p ≥ a : ${p>=a?'vraie → fin':'fausse → on répète'}`)}while(p<a&&p<1e9);P({a,p},`Résultat : ${p} (au moins un passage dans Répéter)`)}
 else if(k==='pgcd'){P({a,b},`Initialisation : a = ${a}, b = ${b}`);
  while(b!==0){P({a,b,'b≠0':true},'Condition b ≠ 0 vraie → on entre dans la boucle');const r=a%b;P({a,b,r},`r ← a MOD b = ${a} MOD ${b} = ${r}`);a=b;b=r;P({a,b,r},`a ← b = ${a} ; b ← r = ${b}`)}
  P({a,b,'b≠0':false},`Condition b ≠ 0 fausse → fin. PGCD = ${a}`)}
 else if(k==='prem'){let d=2;const n=a;P({n,d},`Test de primalité de n = ${n}, d ← 2`);
  while(d*d<=n&&n%d!==0){P({n,d,'d*d≤n':true,'n MOD d':n%d},`d*d = ${d*d} ≤ ${n} et n MOD d = ${n%d} ≠ 0 → d ← d+1`);d++}
  P({n,d,'d*d≤n':d*d<=n,'n MOD d':n%d},d*d>n?`d*d > n → ${n} est premier ✔`:`${d} divise ${n} → ${n} n’est pas premier ✘`)}
 else{let n=a,d=2;const f=[];P({n,d,facteurs:'—'},`Décomposition de ${n}`);
  while(n>1){if(n%d===0){f.push(d);n=n/d;P({n,d,facteurs:f.join('×')},`${d} divise → on note ${d}, n ← n DIV ${d} = ${n}`)}else{P({n,d,facteurs:f.join('×')||'—'},`${d} ne divise pas ${n} → d ← d+1`);d++}}
  P({n,d,facteurs:f.join('×')},`n = 1 → fin : ${a} = ${f.join(' × ')}`)}
 return S}
function draw(){const s=steps[k];if(!s)return;const mx=Math.max(...s.a,1);
 $('#bars').innerHTML=s.a.map((v,i)=>`<div class="bar ${s.h[i]||''}" style="height:${Math.max(12,v/mx*100)}%">${v}<small>${i}</small></div>`).join('');
 $('#msg').textContent=`Étape ${k+1}/${steps.length} — ${s.m}`;
 $('#vars').innerHTML='<tr>'+Object.keys(s.v).map(x=>`<th>${x}</th>`).join('')+'</tr><tr>'+Object.values(s.v).map(x=>`<td>${x}</td>`).join('')+'</tr>'}
function setupAnim(type){const sort=type==='tri',it=type==='it'||type==='iter';
 const sel=sort?'<option value="sel">Sélection</option><option value="bul">Bulles</option><option value="ins">Insertion</option>':type==='iter'?'<option value="som">Pour : somme de 1 à n</option><option value="chif">Tant que : nombre de chiffres</option><option value="rep">Répéter : plus petite puissance de 2 ≥ a</option>':it?'<option value="pgcd">PGCD (Euclide)</option><option value="prem">Nombre premier</option><option value="fact">Décomposition</option>':'<option value="seq">Séquentielle</option><option value="dic">Dichotomique</option><option value="mm">Maximum / minimum</option>';
 const inp=it?'a = <input id="x" type="text" value="24" style="width:70px"> b = <input id="y" type="text" value="36" style="width:70px">':(type==='rech'?'x = <input id="x" type="text" value="31" style="width:60px"> ':'')+`<input id="arr" type="text" value="${sort?'9, 4, 7, 1, 8, 3':'12, 5, 9, 31, 7'}">`;
 $('#anim').innerHTML=`<h3>Animation pas à pas</h3><div class="ctl" style="margin-top:0"><select id="alg">${sel}</select>${inp}<button class="btn s" id="go">Lancer</button></div><div class="bars" id="bars" style="${it?'display:none':''}"></div><div class="ctl" ${it?'style="margin-top:8px"':''}><button class="btn s" id="pv">◀</button><button class="btn" id="pl">▶ Lecture</button><button class="btn s" id="nx">▶|</button>Vitesse <input type="range" id="sp" min="150" max="1500" value="700"></div><div class="msg" id="msg"></div><table class="vars" id="vars"></table>`;
 const go=()=>{stop();$('#pl').textContent='▶ Lecture';const g=id=>+$('#'+id).value,al=$('#alg').value;
  if(it){let a=Math.abs(Math.round(g('x')))||1,b=Math.abs(Math.round(g('y')));if(al==='prem'||al==='fact')a=Math.min(Math.max(a,2),5000);else if(al!=='pgcd')a=Math.min(a,1000000000);steps=iterSteps(al,a,b).slice(0,400)}
  else{const a=$('#arr').value.split(',').map(Number).filter(v=>!isNaN(v)).slice(0,12);if(!a.length)return;
   steps=sort?sortSteps(al,a):al==='dic'?dichoSteps(a,g('x')):al==='mm'?minmaxSteps(a):seqSteps(a,g('x'))}
  k=0;draw()};
 const play=()=>{if(timer){stop();$('#pl').textContent='▶ Lecture';return}$('#pl').textContent='⏸ Pause';if(k>=steps.length-1)k=0;
  timer=setInterval(()=>{if(k<steps.length-1){k++;draw()}else{stop();$('#pl').textContent='▶ Lecture'}},+$('#sp').value)};
 $('#go').onclick=go;$('#pl').onclick=play;$('#sp').onchange=()=>{if(timer){stop();play()}};
 $('#nx').onclick=()=>{if(k<steps.length-1){k++;draw()}};$('#pv').onclick=()=>{if(k>0){k--;draw()}};
 $('#alg').onchange=go;go()}


const PG=document.body.dataset.ch;const LS={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let PYN=0,PYP=null;
function secH(s){const id='py'+(PYN++);const tdo=s.tdo&&s.tdo.length?`<h4>TDO – Tableau de déclaration des objets</h4><table><tr><th>Objet</th><th>Type / nature</th><th>Rôle</th></tr>${s.tdo.map(r=>'<tr>'+r.map(x=>`<td>${esc(x)}</td>`).join('')+'</tr>').join('')}</table>`:'';
 return `<div class="card"><h3>${s.t}</h3>${tdo}<div class="cols"><div><h4>${s.la||'Algorithme'}</h4><pre>${esc(s.a)}</pre></div><div><h4>${s.lp||'Python (modifiable)'}</h4><textarea class="pyc" id="${id}" spellcheck="false" rows="${Math.min(18,s.p.split('\n').length+1)}">${esc(s.p)}</textarea></div></div>${s.an?`<button class="btn" onclick="runAnim('${s.an}')">🎬 Voir l’animation de cet algorithme</button>`:''}${s.norun?'':`<button class="btn" onclick="runPy('${id}')">▶ Exécuter ici</button>`}<a class="btn s" target="_blank" rel="noopener" href="${EDI}">Éditeur en ligne</a><button class="btn s" onclick="navigator.clipboard&&navigator.clipboard.writeText(document.getElementById('${id}').value)">Copier le code</button><pre class="out" id="${id}o" style="display:none"></pre></div>`}
function loadPy(){if(PYP)return PYP;PYP=new Promise((ok,ko)=>{const t=document.createElement('script');t.src='https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';t.onload=async()=>{try{ok(await loadPyodide())}catch(e){PYP=null;ko(e)}};t.onerror=()=>{PYP=null;ko(new Error('Connexion Internet requise pour exécuter Python dans la page. Utilisez le lien « Éditeur en ligne ».'))};document.head.appendChild(t)});return PYP}
async function runPy(id){const o=document.getElementById(id+'o'),code=document.getElementById(id).value;o.style.display='block';o.textContent='⏳ Chargement de Python (première exécution)…';let out='';
 try{const py=await loadPy();if(/numpy|np\./.test(code))await py.loadPackage('numpy');py.setStdout({batched:x=>{out+=x+'\n'}});py.setStderr({batched:x=>{out+=x+'\n'}});
  py.runPython("import builtins, js\nbuiltins.input = lambda p='': (js.prompt(str(p)) or '')");await py.runPythonAsync(code);o.textContent=out||'(aucun affichage)'}
 catch(e){o.textContent=out+String(e.message||e).trim().split('\n').slice(-4).join('\n')}}
function initPrefs(){const t=LS.get('c3t',null);if(t)document.documentElement.dataset.t=t;document.documentElement.style.fontSize=LS.get('c3f',100)+'%';document.body.classList.toggle('eleve',LS.get('c3m','eleve')==='eleve')}
function setMode(){const e=!document.body.classList.contains('eleve');LS.set('c3m',e?'eleve':'prof');document.body.classList.toggle('eleve',e);toolbar()}
function setTheme(){const d=document.documentElement,dark=d.dataset.t?d.dataset.t==='dark':matchMedia('(prefers-color-scheme:dark)').matches;d.dataset.t=dark?'light':'dark';LS.set('c3t',d.dataset.t)}
function setFont(x){const f=Math.max(80,Math.min(150,LS.get('c3f',100)+x*10));LS.set('c3f',f);document.documentElement.style.fontSize=f+'%'}
window.onbeforeprint=()=>document.querySelectorAll('details').forEach(d=>d.open=true);
function toolbar(){const n=$('#nav'),o=n.querySelector('.tb');if(o)o.remove();const el=document.body.classList.contains('eleve');
 n.insertAdjacentHTML('beforeend',`<span class="tb"><button class="nb" onclick="setMode()" title="Les corrigés sont visibles en mode professeur">${el?'🎓 Mode élève':'👨‍🏫 Mode professeur'}</button><button class="nb" onclick="setTheme()" title="Clair / sombre">🌓</button><button class="nb" onclick="setFont(-1)">A−</button><button class="nb" onclick="setFont(1)">A+</button><button class="nb" onclick="window.print()" title="Imprimer">🖨️</button><input id="sq" type="search" placeholder="🔎 Rechercher…" oninput="doSearch(this.value)"></span>`);
 if(!document.getElementById('sr'))n.insertAdjacentHTML('afterend','<div id="sr" class="card" style="display:none;max-width:900px;margin:8px auto"></div>')}
const nz=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const tx=h=>String(h||'').replace(/<[^>]*>/g,' ').replace(/&[a-z]+;/g,' ').replace(/\s+/g,' ');
function doSearch(q){const box=document.getElementById('sr');q=nz(q.trim());if(q.length<2){box.style.display='none';return}
 const R=[];C.forEach((c,i)=>{const E=[['Introduction',c.intro]];if(c.cours)c.cours.b.forEach(b=>E.push([b[0],b[1]]));(c.S||[]).forEach(x=>E.push([x.t,x.a+' '+x.p]));if(c.ex)for(let j=0;j<c.ex.length;j+=2)E.push(['Exercice '+(j/2+1),c.ex[j]+' '+c.ex[j+1]]);(c.q||[]).forEach(x=>E.push(['Quiz',x[0]]));
  E.forEach(([l,t])=>{const T=tx(t),k=nz(T).indexOf(q);if(k>=0&&R.length<40)R.push(`<div><a href="${pg(i)}"><b>${esc(c.t)}</b> › ${esc(tx(l))}</a><br><small>…${esc(T.slice(Math.max(0,k-40),k+70))}…</small></div>`)})});
 box.innerHTML=R.length?`<h4>${R.length} résultat(s)</h4>`+R.join('<hr>'):'<p>Aucun résultat.</p>';box.style.display='block'}
function saveQ(s,n){const id=document.body.dataset.ch;if(!id)return;const P=LS.get('c3p',{}),o=P[id];P[id]=[Math.max(o?o[0]:0,s),n];LS.set('c3p',P)}
function indexExtra(){const V=LS.get('c3v',{}),P=LS.get('c3p',{});let v=0,q=0;document.querySelectorAll('.gc').forEach(a=>{const id=a.getAttribute('href').replace(/^\d+-|\.html$/g,''),em=a.querySelector('em');if(V[id]){v++;em.insertAdjacentHTML('beforeend',' · ✔ vu')}if(P[id]){q++;em.insertAdjacentHTML('beforeend',` · quiz ${P[id][0]}/${P[id][1]}`)}});const n=C.length;
 $('#main').insertAdjacentHTML('afterbegin',`<div class="card"><b>📈 Progression : ${v}/${n} chapitres vus · ${q} quiz passés</b><div class="bar2"><i style="width:${Math.round(100*v/n)}%"></i></div><button class="btn s" onclick="LS.set('c3v',{});LS.set('c3p',{});location.reload()">Réinitialiser</button></div>`)}
initPrefs();if(PG){boot(PG);const V=LS.get('c3v',{});V[PG]=1;LS.set('c3v',V)}else{indexPage();indexExtra()}toolbar();
