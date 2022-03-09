# TP 2 : balles rebondissantes

  Le [sujet du TP](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/tdtp/exercices-javascript-balles.html)


      <h3>Mise en place du TP</h3>
      <ol>
  	<li>Si vous ne l'avez pas encore fait, installez <i>Node.js</i> comme indiqué dans ce même
    document.
    <br/>Récupérez <a href="fichiers-exercices-balles.zip" class="fichier">l'archive</a>
  	contenant les fichiers nécessaires aux exercices suivants et
  	décompressez la dans votre espace de travail.</li>
  	<li>Cette archive contient une structure telle que celle décrite <a href="https://www.fil.univ-lille1.fr/~routier/enseignement/licence/js-s4/html/template-app.html" target="new">dans ce document</a>.
  	  <br/>Ensuite, placez-vous dans le dossier contenant les fichiers de l'archive et installez les modules en exécutant la commande&nbsp;:
  	  <pre >
  npm install</pre>
  	</li>
  	<li>Exécutez la commande <code>npm run build</code> pour créer le dossier <span class="fichier">./dist/</span> et construire un premier <i>bundle</i>.</li>
  	<li>Vous pouvez ouvrir le fichier <span class="fichier">dist/index.html</span>, mais pour le moment le script n'est pas actif, vous allez devoir le compléter. Vous pouvez cependant vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message <code>le bundle a été généré</code>. Si c'est le cas, c'est que tout s'est bien déroulé.</li>
  	<li>Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.
  <br />Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier <span class="fichier">dist/index.html</span> qu'il faut consulter pour avoir le résultat
  <div class="important complement">
    Attention, le résultat <strong>ne se consultent pas</strong> avec le fichier <span class="fichier"><strong>src</strong>/index.html</span> : vous devez faire vos modifications et votre travail dans le dossier <span class="fichier">src/</span> mais le résultat du travail est observé dans le dossier <span class="fichier">dist/</span>.
  </div>
  <br />
      Cependant, comme indiqué dans <a href="https://www.fil.univ-lille1.fr/~routier/enseignement/licence/js-s4/html/template-app.html#heading2" target="new">cette section</a>, vous pouvez profiter des facilités offertes par  <i>Webpack</i> pendant la phase de développement pour reconstruire automatiquement le bundle en utilisant <code>npm run watch</code>, <strong>ou</strong> pour plus de facilités encore et visualiser les résultats <q>en direct</q>  en démarrant le serveur de développement&nbsp;:</p>
      <pre>
  npm run dev-server
  </pre><p><strong>C'est la solution que l'on vous conseille d'adopter.</strong> Et on supposera que c'est ce que vous faites par la suite.</li>
  	 <li>N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier <span class="fichier">dist/</span>.</li>
      </ol>
