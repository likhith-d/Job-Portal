package klu.repository;

import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import klu.model.Users;

@Repository
public interface UsersRepository extends JpaAttributeConverter<Users, String> {
    @Query("select count(U) from Users U where U.email =:email")
    public int validateEmail(@Param("email") String email);

    public void save(Users u);

}