package org.remoapp.backend.security;

import lombok.Getter;
import org.remoapp.backend.entity.UserEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.Collections;

@Getter
public class AppUserPrincipal extends User {

    private final UserEntity userEntity;
    private final Long userId;

    public AppUserPrincipal(final UserEntity userEntity) {
        super(userEntity.getUsername(), "", getAuthorities(userEntity));
        this.userId = userEntity.getId();
        this.userEntity = userEntity;
    }

    private static Collection<? extends GrantedAuthority> getAuthorities(UserEntity userEntity) {
        if (userEntity.isAdmin()) return Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"));

        return Collections.emptyList();
    }
}
