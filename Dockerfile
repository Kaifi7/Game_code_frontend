FROM centos

LABEL maintainer=Kafeel
LABEL company=TCS

RUN yum install -y httpd

WORKDIR /var/www/html

COPY /Game_code_frontend/* /var/www/html/

#RUN unzip code.zip && mv /var/www/html/Game_code_frontend/* /var/www/html

# added when changed default port in tomcat
COPY httpd.conf /etc/httpd/conf/

EXPOSE 8081

CMD apachectl -DFOREGROUND
