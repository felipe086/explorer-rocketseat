# Git e GitHub

## Comandos básicos

`git init` : Inicia um repositório Git em um diretório local.

`git add <arquivo>` : Adiciona o arquivo para o rastreamento.

`git add .` : Adiciona todos os arquivo para o rastreamento.

`git status` : Mostra o estado atual do repositório, incluindo arquivos modificados e não rastreados.

`git show` : Mostra o estado atual dos commits locais.

`git log` : Mostra o histórico de commits do repositório.

`git pull` : Puxa as alterações mais recentes do repositório remoto.

`git push` : Empurra/envia os commits locais para o repositório remoto.

`git restore <arquivo>` : Descarta as alterações em arquivos do repositório.

## Configuração do Git

[Configurando o SSH](https://efficient-sloth-d85.notion.site/Configurando-SSH-f4996d82d1a242709b789fc7e12f41a7) : O SSH é uma sigla para Secure Shell, um termo e protocolo de um mecanismo de segurança na rede.

`git config --global user.name "Nome"` : Define seu nome de usuário.

`git config --global user.email "Email"` : Define seu endereço de e-mail.

`git config --global --list` : Lista todas as configurações do Git.

## Trabalhando com branches

`git branch <nome da branch>`: Cria uma nova branch.

`git checkout <branch>` : Altera para a branch especificada.

`git merge <branch>` : Mescla a branch especificada à branch atual.

`git merge <nome da branch>`: Mescla a branch especificada à branch atual.

`git branch -d <nome da branch>`: Deleta a branch especificada localmente.

`git push <remote> --delete <nome da branch>`: Deleta a branch especificada remotamente.

`git branch -m <novo nome>`: Renomeia a branch atual para o nome especificado localmente. Para mandar para o remoto, precisa deletar a branch remotamente e dar o push na nova branch remotamente com o `git push <remote> <novo nome>`.

`git branch -a`: Lista todas as branches.

## Commits

`git checkout <nome do arquivo>`: Refaz alterações locais que não foram commitadas.

`git revert <hash_code>`: Reverte o commit que já foi pushado.

A opção "--no-edit" impede o git de solicitar que você insira uma mensagem de commit. Se você não adicionar essa opção, você acabará no editor de texto VIM. Para sair do VIM, pressione ":" para entrar no modo de comando, em seguida, "q" para sair e, finalmente, pressione "Return" (Mac) ou "Enter" (Windows).

`git log`: Mostra o histórico de commits, ideal para ver o hash code.

`git reset --soft HEAD~`: Desfaz alterações do último commit que ainda não foi pushado.

`git reset --soft HEAD~2`: Desfaz os últimos 2 commits.

`git reset <hash_code>`: Desfaz alterações de um commit que não foi pushado.

Se você fizer "git reset", os commits serão removidos, mas as alterações aparecerão como não confirmadas, dando a você acesso ao código. Essa é a opção mais segura, porque talvez você queira parte desse código e agora pode fazer alterações e novos commits que sejam úteis. No entanto, frequentemente você vai querer desfazer os commits e descartar o código, e é isso que "git reset --hard" faz.

## Resolução de conflitos

`git diff`: Mostra as diferenças entre arquivos não rastreados e arquivos rastreados.

`git merge <nome da branch>`: Mescla a branch especificada à branch atual.

`git mergetool`: Inicia uma ferramenta de mesclagem visual para ajudar na resolução de conflitos.

## Trabalhando com repositórios remotos

`git clone <URL do repositório>`: Clona um repositório Git remoto para um diretório local.

`git remote add <nome do remoto> <URL do repositório>`: Adiciona um repositório remoto ao repositório local.

`git fetch <nome do remoto>`: Puxa as atualizações mais recentes do repositório remoto.

`git pull <nome do remoto> <nome da branch>`: Puxa as atualizações mais recentes do repositório remoto e mescla com a branch especificada.

`git push <nome do remoto> <nome da branch>`: Empurra a branch especificada para o repositório remoto com o mesmo nome.

`git remote -v`: Mostra uma lista dos repositórios remotos vinculados ao repositório local.

`git push -u <nome do remoto> <nome da branch>`: Define o repositório remoto e a branch padrão para push.

`git remote show <nome do remoto>`: Mostra informações sobre um repositório remoto específico.

`git remote rename <nome antigo> <nome novo>`: Renomeia um repositório remoto.

`git remote remove <nome do remoto>`: Remove um repositório remoto do repositório local.

`git remote set-url origin <url>`: Altera o repositório remoto.
