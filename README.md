# EASI (Eczema Area and Severity Index)

Identificador: `easi`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. Revisão documental e clínica independente pendente.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/cirurgia-sentidos.php`.
- 4/4 casos de referência conferidos na importação. 0 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Em cada região: (eritema + edema/papulação + escoriação + liquenificação, cada um de 0 a 3) × área (0 a 6) × peso. Pesos a partir de 8 anos: cabeça 0,1; membros superiores 0,2; tronco 0,3; membros inferiores 0,4. De 0 a 7 anos: 0,2; 0,2; 0,3; 0,3. EASI de 0 a 72.

A transcrição acima documenta o acervo de origem e pode requerer atualização. 

## Condições e limites

Mede a gravidade dos sinais da dermatite atópica em quatro regiões, com pesos diferentes para crianças de até 7 anos. Instrumento recomendado pela iniciativa HOME.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Hanifin JM et al. The eczema area and severity index (EASI): assessment of reliability in atopic dermatitis. Exp Dermatol, 2001.](https://doi.org/10.1034/j.1600-0625.2001.100102.x)
- [Leshem YA et al. What the Eczema Area and Severity Index score tells us about the severity of atopic dermatitis: an interpretability study. Br J Dermatol, 2015.](https://doi.org/10.1111/bjd.13662)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. 1 exemplos de escore omitiam opções zero no acervo. Somente nesses fixtures, as opções documentadas com chave 0 foram expandidas; os nomes estão em expandedZeroOptions. Isso nunca é aplicado à entrada de um usuário.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
