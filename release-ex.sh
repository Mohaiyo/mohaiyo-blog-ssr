# 发布
rsync -cavzP  ./ --exclude-from='.rsync-exclude' root@xx.xxx.xxx.xx:/home/blogTest
ssh root@xx.xxx.xxx.xx "\
cd /home/blogTest;
npm install --registry=https://registry.npm.taobao.org/; \
npm run build; \
sh deploy.sh; \
"
