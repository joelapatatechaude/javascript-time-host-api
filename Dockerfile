# Use the official Nginx image as a base
#FROM nginx:alpine
FROM registry.redhat.io/rhel9/nginx-124


# Set working directory
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files to the Nginx web root
COPY index.html .
COPY styles.css .
COPY app.js .

# OpenShift runs containers as non-root users for security reasons
# Ensure the nginx user can access the necessary files
#RUN chmod -R 755 /usr/share/nginx/html

# Expose the port Nginx is running on
#EXPOSE 8080
#EXPOSE 8443

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
