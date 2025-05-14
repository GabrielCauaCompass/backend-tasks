#!/bin/bash

# Captura o diff das alterações staged
DIFF=$(git diff --cached)

# Verifica se há alterações
if [ -z "$DIFF" ]; then
  echo "Nenhuma alteração encontrada para revisar."
  exit 0
fi

# Exibe o diff para revisão
echo "Revisando alterações staged:"
echo "$DIFF"

# Adicione lógica personalizada para análise aqui, se necessário
# Por exemplo, verificar palavras-chave proibidas ou padrões específicos
if echo "$DIFF" | grep -q "console.log"; then
  echo "Erro: 'console.log' encontrado no código. Remova antes de commitar."
  exit 1
fi

echo "Revisão concluída. Nenhum problema encontrado."
exit 0
