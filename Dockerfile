# Use the official Nginx image as a base
#FROM nginx:alpine
FROM registry.redhat.io/rhel9/nginx-124


# Set working directory
#WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files to the Nginx web root
COPY index.html .
COPY styles.css .
COPY app.js .

# OpenShift runs containers as non-root users for security reasons
# Ensure the nginx user can access the necessary files
#RUN chmod -R 755 /usr/share/nginx/html

#USER root

#RUN chgrp -R 0 /usr/share/nginx/html && \
#    chmod -R g+rwX /usr/share/nginx/html

#RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
#    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx

#USER 1001
# Expose the port Nginx is running on
#EXPOSE 8080
#EXPOSE 8443

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
