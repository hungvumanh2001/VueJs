<template>
    <nav>
        <router-link :to="{name: 'home-router'}">Home</router-link> |
        <router-link :to="{name: 'transaction-router'}">Transactions</router-link> |
        <router-link to="/abc">Budgets</router-link> |
        <router-link to="/abcd">Reports</router-link> | 
        <router-link to="/abcde">Settings</router-link> 
    </nav>
</template>

<script>
export default {
  name: "NavPage"
};
</script>